import Link from "next/link";
import { redirect } from "next/navigation";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Navbar from "./_components/Navbar";
import SmallSidebar from "./_components/SmallSidebar";

export default async function Home() {
    const session = await auth();
    if (!session) redirect("/login");
  
    return (
        <HydrateClient>
            <div className="flex h-screen bg-[#F9FAFB]">
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <SmallSidebar />
                </div>

            </div>
        </HydrateClient>
    );
  }
  
