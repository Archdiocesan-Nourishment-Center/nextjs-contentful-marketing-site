import React from 'react'

type Props = {}

const TopBar = (props: Props) => {
  return (
    <div className='bg-red-900 py-1'>
      <div className="container flex justify-between px-4">
        <div className='text-white text-center w-full sm:text-left'>
          Help End The Cycle Of Poverty In Davao City
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