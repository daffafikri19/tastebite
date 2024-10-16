import Image from 'next/image'
import React from 'react'

export const Logo = ({ width, height } : { width: number, height: number }) => {
  return (
    <Image src="/tastebite-logo.png" alt='TasteBite' width={width} height={height} />
  )
}
