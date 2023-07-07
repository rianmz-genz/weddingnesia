import { AuthPage, Button, InputIcon, Logo, Text } from '@/components'
import { textStyle } from '@/utils/enum'
import Link from 'next/link'
import React from 'react'
import { BiUser } from 'react-icons/bi'
import {FiKey} from "react-icons/fi"

const LoginView = () => {
    return (
        <AuthPage>
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
    </AuthPage>
  )
}

export default LoginView
