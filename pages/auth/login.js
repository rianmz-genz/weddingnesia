import { Button, Input, Text } from '@/components'
import Logo from '@/components/Logo'
import InputIcon from '@/components/globals/InputIcon'
import { textStyle } from '@/utils/enum'
import Link from 'next/link'
import React from 'react'
import { BiUser } from 'react-icons/bi'
import {FiKey} from "react-icons/fi"

const LoginView = () => {
    return (
    <>
        <main className='w-full min-h-screen bg-slate-50 flex justify-center items-center'>
            <form className='w-full max-w-[450px] bg-white px-6 py-12 rounded-md shadow-lg shadow-blue-600/10 flex flex-col items-center'>
                    <Logo className={"w-8/12"} />
                    <div className='w-full mt-6'>
                        <Text className={"mb-1"} style={textStyle.titleQuestion}>Email</Text>
                        <InputIcon
                            autoFocus={true}
                            placeholder="Email"
                            icon={
                                <BiUser className="text-black mr-2" />
                            }
                        />
                        <Text className={"mb-1 mt-3"} style={textStyle.titleQuestion}>Password</Text>
                        <InputIcon
                            type="password"
                            placeholder="Password"
                            icon={
                                <FiKey className="text-black mr-2" />
                            }
                        />
                        <Button className={"mt-6"}>Masuk</Button>
                        <Text className={"text-center mt-3"}>Belum memiliki akun? <Link href={"/auth/register"} className='font-semibold underline text-yellow-700/80'>Daftar</Link></Text>
                    </div>
            </form>
        </main>
    </>
  )
}

export default LoginView
