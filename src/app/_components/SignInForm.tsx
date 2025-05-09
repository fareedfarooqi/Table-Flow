import Link from "next/link";

import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

const SignInForm = async () => {
  const session = await auth();

    if (session?.user) {
        void api.post.getLatest.prefetch();
    }

    return (
        <HydrateClient>
            <div className="min-h-screen overflow-hidden flex items-center justify-start w-full flex-col mt-45">
            
            {/* So this is just the top part of the box */}
            <div className="flex items-center justify-center flex-col w-full">
                <img src="/airtable-full-inline.svg" alt="" className="w-30" />
                <div className="font-medium text-3xl mt-5">Sign In</div>
                <p className="text-[1.1rem] mt-2">or <span className="text-blue-500 underline hover:text-blue-600 hover:no-underline cursor-pointer">create an account</span></p>
            </div>

                <div className="mt-5 w-1/6 flex flex-col gap-2">
                <label className="text-xl">Email</label>
                <input
                    type="text"
                    placeholder="Email address"
                    className="w-full border border-gray-400 text-gray-400 rounded-xl py-2 px-4 hover:cursor-not-allowed"
                    disabled
                />
                <button className="bg-[#98b5e4] text-white py-2 rounded-xl mt-3 hover:cursor-not-allowed" disabled>Continue</button>
                </div>

                {/* Line break with the or */}
                <div className="flex items-center w-1/6 my-6">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-4 text-gray-500 font-medium">or</span>
                <hr className="flex-grow border-t border-gray-300" />
                </div>

                <div className="flex items-center justify-center w-1/6 flex-col gap-5">
                <button 
                    className="flex items-center justify-center border w-full py-[0.35rem] px-4 text-lg gap-3 border-gray-300 rounded-xl hover:bg-[#f4f4f4] hover:border-black cursor-pointer shadow">
                    <img src="/Google-Logo.svg" alt="" className="w-5" />
                    Sign in with Google
                </button>

                <button 
                    className="flex items-center justify-center border w-full py-[0.35rem] px-4 text-lg gap-3 border-gray-300 rounded-xl cursor-not-allowed shadow" disabled>
                    Sign in with Single Sign On
                </button>

                <button 
                    className="flex items-center justify-center border w-full py-[0.35rem] px-4 text-lg gap-3 border-gray-300 rounded-xl cursor-not-allowed shadow" disabled>
                    <img src="/Apple-Logo.svg" alt="" className="w-4" />
                    Sign in with Apple
                </button>


                </div>

            </div>
        </HydrateClient>
    );
}

export default SignInForm;