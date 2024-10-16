import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightIcon } from 'lucide-react'

export const HeroBanner = () => {
    return (
        <div className='bg-primary/30 p-2 rounded-lg flex items-start justify-evenly text-start max-w-[1200px]'>
            <Image className='object-contain' src="/images/chesse-cake-1.png" alt='Chesse-Cake' width={350} height={350} priority />
            <div className='h-full p-10'>
                <div className='pb-10 space-y-4'>
                    <h1 className='text-5xl tracking-tight text-center'>
                        Temukan Resep Lezat untuk Setiap Hidangan!
                    </h1>
                    <p className='text-lg'>
                        Temukan berbagai resep makanan seluruh dunia, dari sarapan ringan hingga makan malam istimewa, temukan inspirasi kuliner yang cocok untuk semua momen!
                    </p>
                </div>
                <div className='w-full flex items-center gap-5'>
                    <Button variant="default" className='w-full'>Jelajahi Resep Favoritmu</Button>
                    <Button variant="secondary" className='w-full'>Tambahkan Resep Sendiri</Button>
                </div>
            </div>
        </div>
    )
}
