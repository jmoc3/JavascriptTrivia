import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db"
import bcrypt from 'bcrypt'

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
      async authorize(credentials) {

        const userFound = await db.user.findUnique({
          where:{
            email:credentials!.email
          }
        })

        if (!userFound) throw new Error('No user Founded')
        
        const matchPassword = await bcrypt.compare(credentials!.password, userFound.password )
        
        if(!matchPassword) throw new Error('Wrong Password')
      
        

        return {
          id:userFound.id,
          name:userFound.name,
          email:userFound.email
        } as any
       
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
    },
    pages:{
      signIn: "/login"
    },
    session: { strategy: "jwt" }
  })

export { handler as GET, handler as POST }