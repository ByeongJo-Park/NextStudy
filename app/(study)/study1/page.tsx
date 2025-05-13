'use client';

import { Button} from "@/components/ui/button";
import { useTestList, useTestDelete } from "@/hooks/useTest";
import { InputForm } from "./_components/form";
import { useState } from "react";
export default function Study1() {
  const [ view, setView ] = useState(false);
  const [ update, setUpdate ] = useState(false);
  const [ selectedId, setSelectedId ] = useState<number | null>(null);
  const { data } = useTestList();
  const { mutate: deleteTest } = useTestDelete();
  const [ selectedData, setSelectedData ] = useState({
    id: 0,
    name: "",
    code1: "",
    code2: "",
    code3: "",
  });
  
  const handleDelete = () => {
    deleteTest(selectedData);
  }
  const handleButtonClick = (type: string) => {
    if (type === 'create') {
      setView(true);
      setUpdate(false);
    } else if (type === 'update') {
      setView(true);
      setUpdate(true);
    } else if (type === 'delete') {
      if (selectedId) {
        handleDelete();
      }
      else {
        alert('삭제할 항목을 선택하세요.');
      }
    }
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
        {data?.map((item) => (
          <li key={item.id} className="flex gap-2 border-b-2 border-b-slate-300" onClick={() => {
            setSelectedId(item.id);
            setSelectedData(item);}}>
            <span>{item.id}</span> | <span>{item.name}</span> | <span>{item.code1}</span> | <span>{item.code2}</span> | <span>{item.code3}</span>
          </li>
        ))}
        { view && (
          <InputForm update={update} data={selectedData}/>
        )}
      </main>
    </div>
  );
}