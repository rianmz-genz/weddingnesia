import Logo from '@/components/Logo'
import { initialValue } from '@/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BiLogOut } from 'react-icons/bi'

const NavbarUser = () => {
    const { navbar } = initialValue.dashboard.user
    const router = useRouter()
    const { pathname } = router
  return (
    <nav className='w-full max-w-[275px] flex flex-col items-center py-12 fixed left-0 top-0 h-screen bg-white'>
        <div className='flex justify-center items-center'><Logo className={'w-9/12'} /></div>
        <ul className='w-8/12 mt-24 mb-12 flex flex-col space-y-4'>
            {
                navbar.map(({ label, href, icon }, idx) => (
                    <li key={idx} className={`${pathname == href && "font-bold"} flex items-center space-x-3 text-lg`}>
                        <p className={`${pathname == href && "text-yellow-600"} text-xl`}>{icon}</p>
                        <Link href={href}>{ label }</Link>
                    </li>
                ))
            }
        </ul>
          <div className='w-8/12'>
              <li className={` flex items-center space-x-3 text-lg`}>
                        <p className={` text-xl`}><BiLogOut /></p>
                        <button>Logout</button>
        </li>
        </div>
    </nav>
  )
}

export default NavbarUser
