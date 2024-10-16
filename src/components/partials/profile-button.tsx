"use client"

import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UserProps } from '../../../types'
import { Card, CardContent } from '../ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button'
import { LogOutIcon, MailIcon, UserIcon } from 'lucide-react'

export const ProfileButton = ({ user, enablePop }: { user?: UserProps, enablePop: boolean }) => {

    return (
        <div>
            {enablePop ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className='cursor-pointer'>
                        <Avatar>
                            <AvatarImage
                                className='border-primary border object-cover rounded-full'
                                src={user?.image ? user.image : "/blank-profile.png"}
                                alt={user?.name ? user.name : "Profile"}
                            />
                            <AvatarFallback>{`${user?.name?.split(" ")[0][0]}` + `${user?.name?.split("")[1][0]}`}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <UserIcon className="mr-2 h-4 w-4" />
                            <span>{user?.name}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <MailIcon className="mr-2 h-4 w-4" />
                            <span>{user?.email}</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOutIcon className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Avatar>
                    <AvatarImage
                        className='border-primary border object-cover rounded-full'
                        src={user?.image ? user.image : "/blank-profile.png"}
                        alt={user?.name ? user.name : "Profile"}
                    />
                    <AvatarFallback>{`${user?.name?.split(" ")[0][0]}` + `${user?.name?.split("")[1][0]}`}</AvatarFallback>
                </Avatar>
            )}
        </div>
    )
}
