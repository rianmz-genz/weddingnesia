import React from 'react'
import Text from './Text'
import { textStyle } from '@/utils/enum'

const SectionParagraph = ({title, description, className}) => {
  return (
    <div className={className}>
        <Text style={textStyle.bigtitle}>{ title }</Text>
        <Text style={textStyle.description} className={'mt-4 text-black/70'}>{description}</Text>
    </div>
  )
}

export default SectionParagraph
