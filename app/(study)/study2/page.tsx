'use client';
import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { useGetDataList } from "@/data/test/useTest";

export default function Study2() {
  const { data } = useGetDataList();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <DataTable columns={columns} data={data || []} />
      </main>
    </div>
  );
}
