'use client';

import { Button} from "@/components/ui/button";
import { useGetDataList, useDeleteData } from "@/data/test/useTest";

import { DataTable } from "./_components/table";

export default function Study1() {

  const { data } = useGetDataList();
  const { mutate: deleteTest } = useDeleteData();

  
  const handleDelete = () => {
    deleteTest([]);
  }
  const handleButtonClick = (type: string) => {
    console.log(type);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Study 1</h1>
        <div className="flex gap-2">
          <Button variant="default" onClick={() => handleButtonClick('create')}>생성</Button>
          <Button variant="outline" onClick={() => handleButtonClick('update')}>수정</Button>
          <Button variant="destructive" onClick={() => handleButtonClick('delete')}>삭제</Button>
        </div>
        <DataTable
          columns={[
            {
              accessorKey: "id",
              header: "ID",
            },
            {
              accessorKey: "name",
              header: "이름",
            },
            {
              accessorKey: "code1",
              header: "코드1",
            },
            {
              accessorKey: "code2",
              header: "코드2",
            },
            {
              accessorKey: "code3",
              header: "코드3",
            },
          ]}
          data={data || []}
        />
      </main>
    </div>
  );
}