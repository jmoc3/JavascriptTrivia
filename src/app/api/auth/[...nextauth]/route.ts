import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

 
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
      async authorize(credentials, req) {
        console.log(credentials)
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", email: credentials!.email, password: credentials!.password }

        if (user) {
          return user
        } else {
          return null
        }
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