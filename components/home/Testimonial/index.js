import Button from '@/components/globals/Button'
import Text from '@/components/globals/Text'
import { contentData } from '@/store'
import { buttonStyle, textStyle } from '@/utils/enum'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Testimonial = () => {
  const {testimonials} = contentData.home
  return (
    <section className='w-full bg-gradient-to-t from-yellow-600/80 via-yellow-600/5 to-transparent py-6'>
      <div className='flex w-11/12 min-h-screen mx-auto flex-col md:flex-row justify-center items-center px-4'>
        <div className='md:w-6/12 w-full'>
          <Text style={textStyle.bigtitle}>{testimonials.title}</Text>
          <Text className={'mt-3 mb-6 pr-6 text-black/80'} style={textStyle.description}>{testimonials.description}</Text>
          <Link href={testimonials.button.href}>
            <Button style={buttonStyle.primarylarge}>
            {testimonials.button.value}
            </Button>
          </Link>
        </div>
        <ul className='md:w-6/12 w-full mt-6 md:mt-0 flex space-y-6 flex-col justify-center items-center'>
          {
            testimonials.items.map((item, idx) => (
              <li key={idx} className='bg-white shadow px-6 py-8 rounded-lg w-full flex justify-between items-center'>
                <Image src={item.avatar} alt={`Testimonial ${item.name}`} width={1080} height={1080} className='rounded-full w-24 hidden md:block' />
                <div className='w-full pl-8'>
                  <Text style={textStyle.smalldescription} className={'text-black/80'}>&quot;{item.comment}&quot;</Text>
                  <div className='mt-2 flex'>
                    <Text className={'font-bold'}>{item.name} -</Text>
                    <Text className={'ml-1 text-black/70'}>{item.job}</Text>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Testimonial
