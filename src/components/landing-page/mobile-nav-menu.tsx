"use client"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { LogOutIcon, MenuIcon } from "lucide-react"
import { Logo } from "../logo"
import { ProfileButton } from "./profile-button"
import { UserProps } from "../../../types"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const MobileNavMenu = ({ user }: { user?: UserProps }) => {
    const pathname = usePathname();

    console.log("router", pathname);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <MenuIcon className="w-5 h-5" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <Logo width={75} height={75} />
                </SheetHeader>
                <div className="grid gap-4 py-4 mt-5 border-t border-primary h-full">
                    <div className="flex flex-col justify-between pb-5">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <ProfileButton enablePop={false} user={user} />
                                <div className="flex flex-col">
                                    <span>{user?.name}</span>
                                    <span>{user?.email}</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Button variant={pathname === "/" ? "default" : "outline"}>
                                    <Link href="/">Homepage</Link>
                                </Button>
                                <Button variant={pathname === "/recipe" ? "default" : "outline"}>
                                    <Link href="/recipe">Recipes</Link>
                                </Button>
                                <Button variant={pathname === "/categories" ? "default" : "outline"}>
                                    <Link href="/categories">Categories</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="w-full flex justify-center rounded-md border border-primary">
                            <Button variant="link">Keluar <LogOutIcon className="ml-5 w-6 h-6" /></Button>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
