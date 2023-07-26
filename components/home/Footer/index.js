import { initialValue } from '@/store'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const {footer} = initialValue.home
  return (
    <footer className='w-full bg-slate-900 py-24'>
        <div className='w-11/12 flex mx-auto'>
            <Image src={footer.whiteLogo} className='w-48' alt='White Logo WeddingNesia' width={1080} height={1080} />    
        </div>
    </footer>
  )
}

export default Footer
