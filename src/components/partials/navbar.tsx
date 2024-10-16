import React from 'react'
import { Logo } from './logo'
import { NavMenu } from './navigation-menu'
import { SearchIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { ThemeToggle } from './theme-toggle'
import { MobileNavMenu } from './mobile-nav-menu'
import { ProfileButton } from './profile-button'
import { UserProps } from '../../../types'


const Navbar = ({ user }: { user?: UserProps }) => {

    return (
        <nav className='w-full h-14 fixed top-0 left-0 right-0 py-3 px-3 md:py-2 md:px-4 shadow-lg'>
            <div className='flex items-center justify-between md:px-10'>
                <Logo width={100} height={100} />
                <div className='hidden md:flex md:items-center md:gap-5'>
                    <NavMenu />

                    <div className='flex items-center gap-5'>
                        <Button variant="ghost" className='cursor-pointer px-2 py-1'>
                            <SearchIcon className='w-5 h-5' />
                        </Button>
                        <ThemeToggle />
                        <ProfileButton user={user} />
                    </div>
                </div>

                <div className='flex md:hidden'>
                    <Button variant="ghost" className='cursor-pointer px-2 py-1'>
                        <SearchIcon className='w-5 h-5' />
                    </Button>
                    <ThemeToggle />
                    <MobileNavMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar