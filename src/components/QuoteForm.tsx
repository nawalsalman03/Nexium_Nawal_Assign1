'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { z } from "zod";

import {Button} from "@/components/ui/button";
import{
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TOPICS, Topic } from "../lib/constants";

const FormSchema = z.object({
  topic: z.enum(TOPICS),

});

interface QuoteFormProps{
  onSubmit: (topic: Topic) =>void
}

export function QuoteForm({onSubmit}:QuoteFormProps){
  const form= useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      topic:"motivation",
    }
  });

  function handleSubmit(data: z.infer<typeof FormSchema>){
    onSubmit(data.topic);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="topic"
          render={({ field })=>(
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <FormControl>
                <input placeholder="Enter a topic (motivation, success, life)"{...field}
                />
              </FormControl>

            </FormItem>
          )} 
        />
        <Button type="submit">Get Quotes</Button>

        

      </form>
    </Form>
  );

}
