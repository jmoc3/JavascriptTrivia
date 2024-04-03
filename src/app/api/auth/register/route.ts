import { NextResponse } from "next/server";
import db from '@/libs/db'

export async function POST(req:Request){

  const data = await req.json()
  console.log(data)
  const newUser = await db.user.create({
    data
  })
  console.log(newUser)
  return NextResponse.json(newUser)
}
