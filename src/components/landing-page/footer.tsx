import React from 'react'
import { Logo } from '../logo'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className='w-full p-4 md:p-4 border border-primary'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:gap-5 md:grid-cols-3 lg:grid-cols-3'>
                <div className='max-w-[300px] space-y-4'>
                    <div className='flex items-center justify-center'>
                        <Logo width={100} height={100} />
                    </div>

                    <p className='text-xs md:text-sm'>Kami hadir untuk membantu Anda menemukan inspirasi resep masakan, mulai dari hidangan sehari-hari hingga menu spesial untuk acara istimewa. Jelajahi berbagai resep dari koki profesional dan pengguna berbakat di seluruh dunia!</p>
                </div>
                <div className='text-center'>
                    <h3 className='text-primary'>Navigasi Cepat</h3>

                    <div>
                        <ul className='flex items-start gap-3'>
                            <div className='w-1/2'>
                                <li>
                                    <Link className='text-xs md:text-sm text-primary underline underline-offset-2' href="/">Beranda</Link>
                                </li>
                                <li>
                                    <Link className='text-xs md:text-sm' href="/recipe">Resep</Link>
                                </li>
                            </div>

                            <div className='w-1/2'>
                                <li>
                                    <Link className='text-xs md:text-sm' href="/categories">Kategori</Link>
                                </li>
                                <li>
                                    <Link className='text-xs md:text-sm' href="/categories/">Kategori &gt; Seafood</Link>
                                </li>
                                <li>
                                    <Link className='text-xs md:text-sm' href="/categories/">Kategori &gt; Seafood</Link>
                                </li>
                                <li>
                                    <Link className='text-xs md:text-sm' href="/categories/">Kategori &gt; Seafood</Link>
                                </li>
                                <li>
                                    <Link className='text-xs md:text-sm' href="/categories/">Kategori &gt; Seafood</Link>
                                </li>
                                <li>
                                    <Link className='text-xs md:text-sm' href="/categories/">Kategori &gt; Seafood</Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className='text-center'>
                    <h3 className='text-primary'>Sosial Media</h3>
                    <ul>
                        <li>
                            <Link href="/" className='text-xs md:text-sm text-primary underline underline-offset-2'>Youtube</Link>
                        </li>
                        <li>
                            <Link href="/" className='text-xs md:text-sm'>Instagram</Link>
                        </li>
                        <li>
                            <Link href="/" className='text-xs md:text-sm'>Facebook</Link>
                        </li>
                        <li>
                            <Link href="/" className='text-xs md:text-sm'>WhatsApp</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
