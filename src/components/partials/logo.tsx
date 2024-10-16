import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = ({ width, height } : { width: number, height: number }) => {
  return (
    <Link href="/"><Image src="/tastebite-logo.png" alt='TasteBite' width={width} height={height} /></Link>
  )
}
