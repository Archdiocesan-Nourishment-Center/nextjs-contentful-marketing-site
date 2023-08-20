import React from 'react'
import HeaderLogoImg from '@/images/webps/header_logo.webp'
import Image from 'next/image'
import MailInfo from './MailInfo';
import CallInfo from './CallInfo';
import HowToHelpButton from './HowToHelpButton';
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='py-3'>
      <div className='container mx-auto justify-between flex px-4'>
        <Image src={HeaderLogoImg} alt="header logo" className='mx-auto sm:mx-0' />
        <div className="hidden gap-4 my-auto md:(gap-7 flex)">
          <MailInfo />
          <CallInfo />
          <HowToHelpButton />
        </div>
      </div>
    </div>
  )
}

export default Header