import Link from "next/link";
import { redirect } from "next/navigation";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Navbar from "./_components/Navbar";

export default async function Home() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    /*if (session?.user) {
      void api.post.getLatest.prefetch();
    }
    {session?.user?.image && (
        <button className="cursor-pointer flex items-center justify-center rounded-3xl shadow-[0_0_0_0.5px_#DADCE0]">
            <img src={session.user.image} alt={session.user.name || "Profile"} className="w-8 h-8 rounded-3xl" />
        </button>
    )}  
    */
   
    console.log(session);

    return (
        <HydrateClient>
            <div className="bg-[#F9FAFB] min-h-screen">
                <Navbar />
            </div>
        </HydrateClient>
    );
}
