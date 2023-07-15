import Logo from '@/components/Logo'
import Button from '@/components/globals/Button'
import { contentData } from '@/store'
import { buttonStyle } from '@/utils/enum'
import Link from 'next/link'
import React from 'react'

const NavbarLandingpage = () => {
  return (
    <header className='w-full mt-8  flex items-center justify-center bg-white top-0 left-0'>
      <nav className='w-full mx-auto flex justify-between items-center'>
        <Logo className={"w-48"} />
            <ul className='flex w-full justify-evenly items-center'>
              {contentData.home.navbar.map((item, idx) => (
              <li key={idx}>
              <a href={item.path} className='font-semibold text-black/80'>{ item.value }</a>
                  </li>
              ))}
                    <Link href="/auth/login" className='font-semibold border-l pl-8 text-black/80'>
            Login
          </Link>
          <Link href={'/auth/register'}>
          <Button style={buttonStyle.outlineprimarylarge}>
            Buat Undangan
          </Button>
          </Link>
        </ul>

      
        </nav>
    </header>
  )
}

export default NavbarLandingpage
