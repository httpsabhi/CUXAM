"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "path";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function LoginForm(){
    const formSchema = z.object({
        username: z.string().min(2).max(50),
        password: z.string().min(5),
      });
    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            defaultValues: {
                username: "",
                password: "",
            }
        }
    );
    function onSubmit(values: z.infer<typeof formSchema>){
        console.log(values);
    }
    return (
        <CardContainer className="inter-var justify-center">
        <CardBody className="h-full backdrop-blur-sm bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.5] dark:bg-black dark:border-white/[0.2] border-green/[0.3] sm:w-[30rem] rounded-xl p-6 border  ">
          <CardItem
            className="text-xl text-red-500 font-bold dark:text-Red"
          >
            CUXAM
          </CardItem>
          <CardItem   className="text-xl text-blue-500 max-w-sm mt-2 dark:text-neutral-300">
            Login
          </CardItem>
          <CardItem
              as="div"
              className="px-4 py-4 rounded-xl text-xs font-normal dark:text-white"
            >
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-y-3">
              <FormLabel className="flex">Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-y-3">
              <FormLabel className="flex">Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
            </CardItem>
        </CardBody>
      </CardContainer>
    );
}