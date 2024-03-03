import { cn } from "@/lib/utils"
import Rive from '@rive-app/react-canvas';
import { Button } from "./button"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { RiAiGenerate } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { TypewriterEffectSmooth } from "./typewriter";
import { TbSettings } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isSidebarOpenState } from "@/state/atoms/sidebar";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ className, isOpen, setIsOpen }: SidebarProps){
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(isSidebarOpenState); 
  const navigate = useNavigate();
  const words = [
    {
      text: "Hare Krishna",
      className: "text-red-500 dark:text-red-500"
    }
    
  ]
  isOpen = isOpen ?? isSidebarOpen;
  setIsOpen = setIsOpen ?? setIsSidebarOpen;
  return (
    <div className={cn("pb-1 flex flex-col justify-between max-h-screen", className, {"hidden":!isOpen})}>
      <div className="space-y-2 py-2">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Actions
          </h2>
          <div className="space-y-1">
            <Button onClick={()=>{
              navigate('/generate');
            }} variant="secondary" className="w-full justify-start">
             <RiAiGenerate className="mr-2 h-4 w-4"/>
              Generate
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FaDatabase className="mr-2 h-4 w-4"/>
              Database
            </Button>
          <h2 className="px-7 text-lg font-semibold tracking-tight">
            History
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
             </div>
          </ScrollArea>
          </div>
        </div>
      </div>
      <div className="relative border-2 rounded-lg mx-2 my-1 border-white-300"   >
        <div className="flex justify-between m-4 object-center">
          <RxAvatar className="h-8 w-8"/>
          <TbSettings className="h-6 w-6 hover:shadow-md"/>
        </div>
        <div className="w-52 mx-2 flex justify">
          <TypewriterEffectSmooth words={words}></TypewriterEffectSmooth>
        </div>
      </div>
    </div>
  )
}