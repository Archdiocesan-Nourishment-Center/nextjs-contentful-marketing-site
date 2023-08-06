import React from 'react'

type Props = {}

const TopBar = (props: Props) => {
  return (
    <div className='bg-red-900 py-1'>
      <div className="container mx-auto flex justify-between">
        <div className='text-white text-center w-full sm:text-left'>
          Help end the cycle of poverty in Davao City
        </div>
        <div className='text-white hidden sm:flex gap-2'>
          <a target='_blank' href="https://www.facebook.com/archdiocesannourishmentcenter/">Facebook</a>
          <a target='_blank' href="https://www.linkedin.com/company/archdiocesan-nourishment-center/">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default TopBar