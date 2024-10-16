import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from '../../../../auth';
import { redirect } from 'next/navigation'

const LoginPage = () => {

    return (
        <div className='w-full h-full flex items-center justify-center p-4'>
            <Card>
                <CardHeader className='flex items-center w-full'>
                    <Image src="/tastebite-logo.png" alt='TasteBite' width={150} height={150} />
                </CardHeader>
                <CardContent className='space-y-4'>
                    <Separator className='w-full' />
                    <form action={async () => {
                        "use server"
                        await signIn("google", { redirectTo: '/' })
                        redirect("/")
                    }}>
                        <div className='rounded-lg p-4 border hover:border-primary hvover:shadow-lg flex items-center justify-center gap-5 cursor-pointer'>
                            <Image src="/google-logo.svg" alt='Log In With Google' width={50} height={50} />
                            <button className='text-2xl font-semibold' type='submit'>Masuk Dengan Google</button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className='flex items-center justify-between'>
                    <span className='text-sm text-muted-foreground'>Tidak punya akun ?</span>
                    <Link href="/auth/register" className='text-sm text-primary'>Daftar</Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LoginPage