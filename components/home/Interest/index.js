import Text from '@/components/globals/Text'
import { contentData } from '@/store'
import { textStyle } from '@/utils/enum'
import Image from 'next/image'
import React from 'react'

const InterestSection = () => {
  return (
    <div className='w-full min-h-screen space-x-3 md:flex-row flex-col flex justify-center items-center my-6'>
          <div className='md:w-6/12 w-11/12'>
              <Text style={textStyle.bigtitle}>
                {contentData.home.interest.title}
              </Text>
              <Text style={textStyle.description} className={'w-11/12 mt-2 text-black/70'}>
                {contentData.home.interest.description} <span className='font-bold'>{ contentData.home.interest.bold }</span>
        </Text>
        <ul className='mt-8 flex flex-col space-y-5'>
          {
            contentData.home.interest.items.map((item, idx) => (
              <li key={idx} className='flex justify-center items-start space-x-4'>
            <div className='bg-yellow-600 text-white rounded-full text-xl p-3'>
              {item.logo}
            </div>
            <div>
              <Text style={textStyle.description} className={'font-bold'}>
                {item.title}
              </Text>
              <Text style={textStyle.smalldescription} className={'text-black/70'}>
                {item.description}
              </Text>
            </div>
          </li>
            ))
          }
        </ul>
      </div>
          <Image src={contentData.home.interest.img} alt='Image WeddingNesia' width={1080} height={1080} className='md:w-6/12 w-11/12 md:mt-0 mt-12'  />
    </div>
  )
}

export default InterestSection
