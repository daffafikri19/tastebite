import Navbar from "@/components/landing-page/navbar";
import { ReactNode } from "react";
import { auth } from "../../../auth";
import { Footer } from "@/components/landing-page/footer";

export default async function LandingPageLayout({ children }: { children: ReactNode }) {
    const session = await auth();
    return (
        <div>
            <div className="h-full">
                <Navbar user={session?.user} />
                <div className="pt-14">
                    {children}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}