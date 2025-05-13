import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.test.findMany();
  console.log('get data', data);
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  console.log('post start')
  const body = await req.json();
  const created = await prisma.test.create({
    data: {
      name: body.name,
      code1: body.code1,
      code2: body.code2,
      code3: body.code3,
    },
  })
  return NextResponse.json(created, { status: 201 })
}

export async function PUT(req: NextRequest) {
  console.log('update start')
  const body = await req.json()
  const updated = await prisma.test.update({
    data: {
      name: body.name,
      code1: body.code1,
      code2: body.code2,
      code3: body.code3,
    },
    where: {
      id: Number(body.id),
    }
  })
  return NextResponse.json(updated, { status: 201 })
}

export async function DELETE(req: NextRequest) {
  const body = await req.json()
  const deleted = await prisma.test.delete({
    where: {
      id: Number(body.id),
    }
  })
  return NextResponse.json(deleted, { status: 200 });
}