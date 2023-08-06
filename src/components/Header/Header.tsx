import React from 'react'
import HeaderLogoImg from '@/images/webps/header_logo.webp'
import Image from 'next/image'
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='py-3'>
      <div className='container mx-auto'>
        <Image src={HeaderLogoImg} alt="header logo" className='mx-auto sm:mx-0' />
      </div>
    </div>
  )
}

export default Header