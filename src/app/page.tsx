import Link from "next/link";
import { redirect } from "next/navigation";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    /*if (session?.user) {
      void api.post.getLatest.prefetch();
    }*/
   
    console.log(session);

    return (
        <HydrateClient>
            <main className="">
                {session && <span>Logged in as {session.user?.name}</span>}
                <div className="">

                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="text-center text-2xl text-white">
                        {session && <span>Logged in as {session.user?.name}</span>}
                        </p>
                        <Link
                        href={session ? "/api/auth/signout" : "/api/auth/signin"}
                        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                        >
                        {session ? "Sign out" : "Sign in"}
                        </Link>
                    </div>
                </div>
            </main>
        </HydrateClient>
    );
}
