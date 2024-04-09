import NextAuth, { User } from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db"
import { NextResponse } from 'next/server';
 
const handler = NextAuth({
  providers: [
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials,req) {
        console.log(credentials)
        
        try {
          const userFound = await db.user.findUnique({
            where:{
              email:credentials!.email
            }
          })

          console.log(userFound)
          if(userFound==null){
            return NextResponse.json({message:"User doesn't exist"})
          }
  
          if (credentials?.password == userFound!.password){
            return NextResponse.json({message:"Incorrect Password"})
          }
          
        } catch (error) {
          console.log(error)
        }

        return credentials as any
      }
    })],
    callbacks:{
      async jwt({token,user}){
        return {...token, ...user}
      },
      async session({session, token}){
        session.user = token as any
        return session
      }
    }
})

export { handler as GET, handler as POST }