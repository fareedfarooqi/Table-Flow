import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "~/prisma"

export const { handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: { strategy: "database" },
  callbacks: {
    async session({ session, user }) {
      session.user!.id = user.id;
      return session;
    },
  },
});

export const GET  = handlers.GET;
export const POST = handlers.POST;
