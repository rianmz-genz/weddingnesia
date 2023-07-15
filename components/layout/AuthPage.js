import React from 'react'

const AuthPage = ({children, onSubmit}) => {
  return (
    <>
      <main className='w-full min-h-screen bg-slate-50 flex justify-center items-center'>
        <form onSubmit={onSubmit} className='w-full max-w-[450px] bg-white px-6 py-12 rounded-md shadow-lg shadow-blue-600/10 flex flex-col items-center'>
          {children}
        </form>
      </main>
    </>
  )
}

export default AuthPage
