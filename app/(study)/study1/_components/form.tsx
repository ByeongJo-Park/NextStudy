'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TestSchema,TestType } from "@/data/test/model";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTestCreate, useTestUpdate } from "@/hooks/useTest";

interface InputFormProps {
  update?: boolean
  data?: TestType
  setUpdate?: (update: boolean) => void
  setView?: (view: boolean) => void
}


export function InputForm({
  update = false,
  data = {
    id: 0,
    name: "",
    code1: "",
    code2: "",
    code3: "",
  }}: InputFormProps) {
    
  const { mutate: createTest } = useTestCreate();
  const { mutate: updateTest } = useTestUpdate();

  const form = useForm<z.input<typeof TestSchema>>({
    resolver: zodResolver(TestSchema),
    defaultValues: data,
  });

  function onSubmit(data: z.input<typeof TestSchema>) {
    console.log("onSubmit", data);
    try {
      if (!update) {
        createTest(data);
      } else {
        updateTest(data);
      }
      form.reset();
    }
    catch (error) {
      console.error("Error creating test:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="이름" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>code1</FormLabel>
              <FormControl>
                <Input placeholder="code1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>code2</FormLabel>
              <FormControl>
                <Input placeholder="code2" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>code3</FormLabel>
              <FormControl>
                <Input placeholder="code3" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

