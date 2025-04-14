'use client'

import Link from "next/link";
import MediumButton from "@/components/UI/btnMedium";

export default function Error(): JSX.Element {
    //console.log(error);

    return  (
        <main className="error">
            <h1>An error occurred!</h1>
            <p>Failed to fetch project data. Please try again later.</p>
            <Link href='/' ><MediumButton>Back to Home</MediumButton></Link>
        </main>
    )
}