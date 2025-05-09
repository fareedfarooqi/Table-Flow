import Link from "next/link";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { AiOutlineUser } from "react-icons/ai";
import GoogleButton from "./GoogleButton";

const SignUpForm = async () => {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <div className="min-h-screen overflow-hidden flex items-center justify-start flex-col mt-12">
        
        <div className="flex items-center justify-center flex-col w-1/4">
          <img src="/airtable-full-inline.svg" alt="Airtable logo" className="w-35" />
        </div>

        <div className="flex items-start justify-center flex-col w-1/4 mt-9">
          <div className="font-medium text-4xl">Create your free account</div>
        </div>

        <div className="mt-6 w-1/4 flex flex-col gap-2">
            <label className="text-xl">Work Email</label>
            <div className="flex items-center border-2 border-[#e8e8e8] rounded-md px-4 py-3 bg-white hover:cursor-not-allowed">
                <AiOutlineUser className="text-gray-400 mr-3" />
                <input
                    type="text"
                    placeholder="name@company.com"
                    className="w-full outline-none text-gray-700 bg-transparent"
                    disabled
                />
            </div>

            <button
                className="bg-[#98b5e4] text-white py-2 rounded-md mt-3 hover:cursor-not-allowed"
                disabled
            >
                Continue
          </button>
        </div>

        <div className="flex items-center w-1/4 my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 font-medium">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="flex items-center justify-center w-1/4 flex-col gap-4">
            <button
                className="flex items-center justify-center border w-full py-[0.35rem] px-4 text-lg gap-3 border-gray-300 rounded-md cursor-not-allowed shadow"
                disabled
                >
                Continue with Single Sign On
            </button>
            <Link href="/api/auth/signin" className="flex items-center justify-center border w-full py-[0.35rem] px-4 text-lg gap-3 border-gray-300 rounded-md hover:bg-[#f4f4f4] hover:border-black cursor-pointer shadow">
                <img src="/Google-Logo.svg" alt="Google" className="w-5" />
                Continue with Google
            </Link>
            {/*<GoogleButton /> */}

            <p className="cursor-not-allowed text-gray-600 text-sm">Continue with Apple ID</p>
        </div>

        <div className="mt-8 w-1/4 text-sm text-gray-600 flex flex-col gap-4">

            <p className="flex items-start gap-2 text-md">
                <input type="checkbox" disabled className="mt-1 cursor-not-allowed invisible" />
                By creating an account, you agree to the{" "}
                <span className="text-[#616670] font-medium underline cursor-not-allowed decoration-[#eeeeee] underline-offset-4 decoration-2">
                    Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-[#616670] font-medium underline cursor-not-allowed decoration-[#eeeeee] underline-offset-4 decoration-2">
                    Privacy Policy.
                </span>
            </p>

            <label className="flex items-start gap-2">
                <input type="checkbox" disabled className="mt-1 cursor-not-allowed" />
                <span>
                    By checking this box, you agree to receive marketing and sales
                    communications about Airtable products, services, and events. You
                    understand that you can manage your preferences at any time by following
                    the instructions in the communications received.
                </span>
            </label>

            <p className="text-center text-sm text-gray-700">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 font-medium  underline decoration-2 underline-offset-4 hover:text-blue-900">
                    Sign in
                </Link>
            </p>
        </div>

      </div>
    </HydrateClient>
  );
};

export default SignUpForm;
