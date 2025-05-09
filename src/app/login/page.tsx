import Link from "next/link";

import type { Metadata } from "next";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import SignInForm from "../_components/SignInForm";

export const metadata: Metadata = {
    title: "Sign in - Airtable",
};

const LoginPage = async () => {
    return (
        <HydrateClient>
            <SignInForm />
        </HydrateClient>
    );
}

export default LoginPage;