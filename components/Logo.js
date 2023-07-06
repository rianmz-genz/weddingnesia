import { contentData } from '@/store'
import Image from 'next/image'
import React from 'react'

const Logo = ({className}) => {
  return (
    <Image width={1920} height={1080} src={contentData.logoSrc} alt='Logo WeddingNesia' className={className} />
  )
}

export default Logo
