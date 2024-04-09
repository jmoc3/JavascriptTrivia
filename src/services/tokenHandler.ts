import { getToken } from "next-auth/jwt"
import { RequestAsyncStorage } from "next/dist/client/components/request-async-storage.external"
import { NextRequest, NextResponse } from "next/server"

const secret = process.env.NEXTAUTH_SECRET

export async function tokenHandler(req:NextRequest) {
  // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
  // const token = await getToken({ req })
  try {
    
    const token = await getToken({ req, secret })
    console.log("JSON Web Token", token)
    NextResponse.json({message:token})
  } catch (error) {
    console.log(error)
  }
}