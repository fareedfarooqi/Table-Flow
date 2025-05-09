import Link from "next/link";

import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import SignInForm from "../_components/SignInForm";

const SignUpPage = async () => {
    return (
        <HydrateClient>
            <SignInForm />
        </HydrateClient>
    );
}

export default SignUpPage;