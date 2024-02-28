import React from 'react'
import Content from './Content'
import Image from './Image'

function Card() {
  return (
    <div className='flex'>
        <Content />
        <Image />
    </div>
  )
}

export default Card