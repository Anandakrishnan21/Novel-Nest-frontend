import React from 'react'

function Footer() {
    const current = new Date().getFullYear();
  return (
    <div className='flex justify-center font-mono p-4'>
      <p className='text-sm md:text-base font-bold'>© {current} Novel Nest All Right Reserved</p>
    </div>
  )
}

export default Footer
