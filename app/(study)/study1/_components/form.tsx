'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DataType,
  DataUpdateRequest,
  DataUpdateRequestSchema,
  DataCreateRequest,
  DataCreateRequestSchema } from "@/data/test/model";
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
import { useCreateData, useUpdateData } from "@/data/test/useTest";
interface InputFormProps {
  onClose: () => void;
  isEdit: boolean;
  data: DataType;
}

type FormData = DataCreateRequest | DataUpdateRequest;

export function InputForm({ onClose, isEdit, data }: InputFormProps) {
    
  const { mutate: createTest } = useCreateData();
  const { mutate: updateTest } = useUpdateData();

  const form = useForm<FormData>({
    resolver: zodResolver(isEdit ? DataUpdateRequestSchema : DataCreateRequestSchema),
    defaultValues: isEdit ? {
      id: data.id,
      name: data.name,
      code1: data.code1,
      code2: data.code2,
      code3: data.code3,
    } : {
      name: "",
      code1: "",
      code2: "",
      code3: "",
    }
  });

  function onSubmit(data: FormData) {
    try {
      if (isEdit) {
        updateTest(data as DataUpdateRequest);
      } else {
        createTest(data as DataCreateRequest);
      }
      form.reset();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <FormLabel>코드1</FormLabel>
                <FormControl>
                  <Input placeholder="코드1" {...field} />
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
                <FormLabel>코드2</FormLabel>
                <FormControl>
                  <Input placeholder="코드2" {...field} />
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
                <FormLabel>코드3</FormLabel>
                <FormControl>
                  <Input placeholder="코드3" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4">
            <Button type="submit" variant="default">{isEdit ? "수정" : "생성"}</Button>
            <Button type="button" variant="destructive" onClick={()=> {
              handleClose();
            }}>취소</Button>
          </div>
        </form>
      </Form>
    </>

  );
}

