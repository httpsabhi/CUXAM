import { Teacher } from '@prisma/client';
import { getVenueAtoms } from './utils/venueAtoms.js';
import { getAllRooms, getAllSections, getAllTeachers, getExamAtoms } from '../data/queries.js';
import xlsx, { IJsonSheet,IContent } from 'json-as-xlsx';
import { ExamAtom, lSchedule, VenueAtoms } from '../types/algoAtoms.js';
import { fitnessCheckConsecutiveExam } from './fitness.js';



function MostPreferredVenue(exam:ExamAtom,venueAtoms:VenueAtoms[],schedule:lSchedule[],teacher: Teacher[]):{venue:VenueAtoms|null,external:Teacher|null}{
    const capacity =exam.sec.capacity;
    const sectionSchedule = schedule.filter(s=>s.exam.sec.id===exam.sec.id);
    const internalTeacherSchedule = schedule.filter(s=>s.exam.Teacher===exam.Teacher||s.external.ECode===exam.Teacher);
    let selectedVenue:VenueAtoms|null=null;
    let externalTeacher: Teacher|null = null;
    let maxCapacity = 0;
    let preferredVenue:{venue:VenueAtoms,ind: number,external: Teacher}[]|null = [];
    let i=0;
    for(let venue of venueAtoms){
        let free = true;
        const currentDayITeacherSchedule = internalTeacherSchedule.filter(s=>s.venue.date.getTime()==venue.date.getTime());
        for(let s of currentDayITeacherSchedule){
            if(s.venue.timeSlot===venue.timeSlot){
                free=false;
                break;
            }
        }
        externalTeacher = MostPreferredExternal(exam.Teacher,venue,teacher,schedule);
        if(externalTeacher===null){
            i++;
            continue;
        }
        if(free){
        const currentDaySchedule = sectionSchedule.filter(s=>s.venue.date.getTime()===venue.date.getTime());
        if(currentDaySchedule.length==0){
            if(venue.capacity<exam.sec.capacity){
                preferredVenue.push({venue:venue,ind:i,external:externalTeacher});
                i++;
                continue;
            }
            selectedVenue = venue;
            venueAtoms.splice(i,1);
            break;
        }
        else if(currentDaySchedule.length<2){
            if(currentDaySchedule[0].venue.timeSlot!=venue.timeSlot){
                if(venue.capacity<exam.sec.capacity){
                    preferredVenue.push({venue:venue,ind:i,external:externalTeacher});
                    i++;
                    continue;
                }
                selectedVenue = venue;
                venueAtoms.splice(i,1);
                break;
            }
        }}
        i++;
        }
        if(selectedVenue ===null){
            if(preferredVenue.length!==0){
                const bestFitVenue = preferredVenue.reduce((prev,current)=>(prev && prev.venue.capacity>current.venue.capacity)?prev:current);
                selectedVenue = bestFitVenue.venue;
                externalTeacher = bestFitVenue.external;
                venueAtoms.splice(bestFitVenue.ind,1);
            }
        }
        return {venue:selectedVenue,external:externalTeacher};
}

function MostPreferredExternal(internal: string,venue:VenueAtoms,teacher: Teacher[],schedule: lSchedule[]){
    teacher.sort(()=>Math.random()-0.5);
    for(let t of teacher){
        if(t.ECode!==internal){
            if(t.ECode==='E15043'){
                console.log("ii");
            }
        const externalSchedule = schedule.filter(s=>s.exam.Teacher===t.ECode||s.external.ECode===t.ECode);
        const externalTodaySchedule = externalSchedule.filter(s=>s.venue.date.getTime()==venue.date.getTime())
        if(externalTodaySchedule.length<3){
            if(externalTodaySchedule.filter(s=>s.venue.timeSlot===venue.timeSlot).length===0){
                return t;
            }
        }}
    }
    return null;
}
export function Population(examAtoms:ExamAtom[],VenueAtoms:VenueAtoms[],AvailableTeacher:Teacher[]):lSchedule[]{
    const schedule: lSchedule[]=[];
    const unscheduled:ExamAtom[] = [];
    const rows:IContent[]=[];
    const scheduleSheet:IJsonSheet[] = [
        {
            sheet: "combined",
            columns:[
                {label:"Course Code",value:"Ccode"},
                {label:"Section",value:"sectionId"},
                {label:"Capacity",value:"capacity"},
                {label:"Internal Teacher",value:"teacher"},
                {label:"Lab No.",value:"labNo"},
                {label:"Block",value:"block"},
                {label:"Lab Capacity",value:"labCapacity"},
                {label:"Date",value:"date"},
                {label:"Slot",value:"timeSlot"},
                {label:"External Teacher",value:"external"}
            ],
            content:rows
        }
    ]
    VenueAtoms.sort(()=>Math.random()-0.5);
    examAtoms.forEach(exam=>{
        let venue = MostPreferredVenue(exam,VenueAtoms,schedule,AvailableTeacher)
        if(venue.venue ===null||venue.external===null){
            console.log(venue);
            unscheduled.push(exam);
        }
        else{
            schedule.push({exam: exam,venue: venue.venue,external:venue.external});
            rows.push({Ccode:exam.Ccode,sectionId:exam.sec.id,capacity:exam.sec.capacity,teacher:exam.Teacher,labNo:venue.venue.labNo,block: venue.venue.block,labCapacity: venue.venue.capacity,date:venue.venue.date,timeSlot:venue.venue.timeSlot,external:venue.external.ECode});
        }
    })
    let settings = {
        fileName: "MySpreadsheet", // Name of the resulting spreadsheet
        extraLength: 4, // A bigger number means that columns will be wider
        writeMode: "writeFile", // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
        writeOptions: {}, // Style options from https://docs.sheetjs.com/docs/api/write-options
        // RTL: true, // Display the columns from right-to-left (the default value is false)
      };
    console.log(schedule.length,rows.length)
    xlsx(scheduleSheet,settings);
    console.log("..........................");
    console.log(unscheduled);
    console.log(VenueAtoms.length);
    return schedule;
}

const testSchedule = await Population(await getExamAtoms(await getAllSections()),await getVenueAtoms(await getAllRooms(),[new Date(2024,3,24),new Date(2024,3,25),new Date(2024,3,26),new Date(2024,3,27),new Date(2024,3,28)]),await getAllTeachers())
const obj = {data: testSchedule};
const json = JSON.stringify(obj);
await Bun.write("schedule.json",json)
