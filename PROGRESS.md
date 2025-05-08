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

1. **Read the NextAuth.js docs**  
   - Review the Quickstart guide  
   - Study the Google provider setup  

2. **Implement Google OAuth**  
   - Add NextAuth.js to the T3 app  
   - Configure the Google provider

3. **Define initial Prisma models**  
   - I want to get some basic initial Prisma models ready and in sync with Supabase so I can accelerate the next part of development

4. **Smoke-test end-to-end**  
   - Log in via Google  
   - Call a simple tRPC query and render the result  
   - Confirm a new Base persists in Supabase
