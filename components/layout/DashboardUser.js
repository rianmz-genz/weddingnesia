import React from 'react'
import NavbarUser from '../dashboard/user/navbar'
import ProfileCard from '../dashboard/user/profilecard'

const DashboardUser = ({children}) => {
  return (
    <div className='w-full min-h-screen bg-slate-50/90 flex justify-center items-center'>
            <div className='w-3/12 h-screen'></div>
            <NavbarUser />
          <div className='w-9/12 mx-auto h-screen mr-3 pt-12'>
              <ProfileCard />
                {children}
            </div>
        </div>
  )
}

export default DashboardUser
