"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataType } from "@/data/test/model"

export const columns: ColumnDef<DataType>[] = [
  {
    accessorKey: "id",
    // header: "ID",
    header: () => <div className="text-left">아이디</div>,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-right">이름</div>
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
]
