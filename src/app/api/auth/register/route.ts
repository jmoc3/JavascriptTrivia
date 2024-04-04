import { NextResponse } from "next/server";
import db from '@/libs/db'
import bcrypt from 'bcrypt' 

export async function POST(req:Request){

  try {
    const data = await req.json()

    const userFound = await db.user.findUnique({
      where:{
        email:data.email
      }
    })
  
    if (userFound) {
      return NextResponse.json({message:"user Already exist"},{status:400})
    }
  
    const hashed = await bcrypt.hash(data.password,10)
    data.password = hashed
  
    const newUser = await db.user.create({
      data
    })
  
    const {password:_,...user} = newUser
    return NextResponse.json(user)
  
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({message: error.message},{status:500})
  }

}
