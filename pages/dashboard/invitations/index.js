import { Text } from '@/components'
import { InputSearch } from '@/components/globals/Input'
import DashboardUser from '@/components/layout/DashboardUser'
import { GetBadgeInvitation } from '@/utils'
import { textStyle } from '@/utils/enum'
import Link from 'next/link'
import React from 'react'
import { FiEdit, FiEye, FiPlus, FiSearch } from 'react-icons/fi'

const DashboardInvitations = () => {
  return (
    <DashboardUser>
      <div className='w-11/12 mx-auto mt-6'>

        <div className='w-full flex justify-between items-center'>
          <Text style={textStyle.title}>Undangan</Text>
          <div className='flex items-center justify-center space-x-3'>
            <button className='bg-green-400/20 text-green-400 rounded-full p-2'>
              <FiPlus />
            </button>
            <InputSearch />
          </div>
        </div>

        <ul className='mt-6'>
          <InvitationItem />
        </ul>
      </div>
    </DashboardUser>
  )
}

export default DashboardInvitations

function InvitationItem() {
  return <li className='w-full bg-white shadow-sm px-4 py-2 rounded-md flex justify-between items-center'>
            <Text style={textStyle.description}>Tejo dan Surti</Text>
            <div className='flex items-center justify-center space-x-4 text-xl'>
              <Link href={'/dashboard/invitations/tejo-surti'}>
                <FiEye />
              </Link>
              <Link href={'/'}>
                <FiEdit/>
              </Link>
              <GetBadgeInvitation />
            </div>
          </li>
}