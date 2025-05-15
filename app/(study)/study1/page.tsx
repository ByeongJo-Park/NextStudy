'use client';

import { Button} from "@/components/ui/button";
import { useState } from "react";
import { InputForm } from "./_components/form";

import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { useGetDataList, useDeleteData } from "@/data/test/useTest";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { DataType } from "@/data/test/model";

export default function Study1() {

  const { data } = useGetDataList();
  const { mutate: deleteData } = useDeleteData();
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedData, setSelectedData] = useState<DataType|null>({
    id: 0,
    name: "",
    code1: "",
    code2: "",
    code3: "",
  });

  const handleCreateButtonClick = (type: string) => {
    if (type === 'create') {
      setIsEdit(false);
      setIsOpen(true);
      setSelectedData({
        id: 0,
        name: "",
        code1: "",
        code2: "",
        code3: "",
      });
    } else if (type === 'update') {
      setIsEdit(true);
      setIsOpen(true);
    } else {
      if (selectedData)
        deleteData({id: selectedData.id})
    }
  }
  const onClose = () => {
    setIsEdit(false);
    setIsOpen(false);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Study 1</h1>
        <div className="flex gap-2">
          <Button variant="default" onClick={() => handleCreateButtonClick('create')}>생성</Button>
          <Button variant="default" onClick={() => handleCreateButtonClick('update')}>수정</Button>
          <Button variant="destructive" onClick={() => handleCreateButtonClick('delete')}>삭제</Button>
        </div>
        <DataTable
          columns={columns}
          data={data || []}
          onSelectedRow={(row) => setSelectedData(row)}
        />
      </main>
      <Dialog
        open={isOpen}>
          <DialogTitle/>
        <DialogContent>
          <InputForm isEdit={isEdit} data={selectedData || 
        {id: 0,
        name: "",
        code1: "",
        code2: "",
        code3: "",
      }} onClose={()=> onClose()}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}