"use client";

import { signIn } from "next-auth/react";

export default function GoogleButton() {
    return (
        <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex items-center justify-center border w-full py-2 px-4 gap-3 border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer shadow"
        >
            <img src="/Google-Logo.svg" alt="Google logo" className="w-5" />
            Continue with Google
        </button>
    );
}
