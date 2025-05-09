# Day 1 Objectives & Achievements

1. **Read & understand the spec**  
   - Reviewed the full task requirements for the Airtable clone  
   - Broke down key features and success criteria  

2. **Explore Airtable UX**  
   - Created my own Airtable account and played with base/table creation  
   - Watched a tutorial video to solidify how bases, tables, and views work  

3. **Map out the tech stack**  
   - Listed required technologies: Next.js (app router), tRPC, Prisma, TanStack Table, Supabase/Postgres, etc.  
   - Sketched a high-level architecture of how they’ll integrate  

4. **Identify knowledge gaps**  
   - Noticed I haven’t used Prisma before → read the Prisma docs (forward-first vs introspection-first, `@map`/`@@map`, basic CRUD)  
   - Discovered I’m new to tRPC → studied the tRPC + Zod guide --> I may build a little tiny example tomorrow to further familiarise myself with this tech 
   - Brushed up on Next.js App Router concepts to prepare for routing/layouts  

**Achievements:**  
- Successfully ran and tested Prisma queries locally (`findMany`, `create`, `update`).  
- Scaffolded the T3 stack repo and connected Supabase as our Postgres host.  
- Committed initial setup to GitHub with a working `npm run dev`.  

# Day 2 Objectives & Achievements

1. **Read NextAuth.js & Google provider docs**  
   - Quickstart guide  
   - Google OAuth setup  

2. **Set up Google OAuth credentials**  
   - Configured consent screen in Google Cloud  
   - Generated Client ID/Secret and added to `.env`  

3. **Integrate Auth.js v5 + PrismaAdapter**  
   - Updated `src/env.js` schema with `GOOGLE_ID`/`GOOGLE_SECRET`  
   - Created `src/app/api/auth/[...nextauth]/route.ts` with PrismaAdapter  

4. **Build sign-in UI & protect `/`**  
   - Made `/login` page and `SignInModal` component  
   - Made `/signup` page and `SignUpModal` component
   - Redirected root (`/`) to `/login` when unauthenticated  

5. **Smoke-test end-to-end**  
   - Click “Sign in with Google” → Google consent → returned to app  
   - Verified new rows in Supabase’s User, Account & Session tables  

**Achievements:**  
- Google OAuth flow working in development  
- Sessions and users persisting correctly in Supabase  

