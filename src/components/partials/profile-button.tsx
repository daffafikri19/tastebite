import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UserProps } from '../../../types'

export const ProfileButton = ({ user }: { user?: UserProps }) => {

    return (
        <div>
            <Avatar>
                <AvatarImage
                    className='border-primary border object-cover rounded-full'
                    src={user?.image ? user.image : "/blank-profile.png"}
                    alt={user?.name ? user.name : "Profile"}
                />
                <AvatarFallback>{`${user?.name?.split(" ")[0][0]}` + `${user?.name?.split("")[1][0]}`}</AvatarFallback>
            </Avatar>

            
        </div>
    )
}
