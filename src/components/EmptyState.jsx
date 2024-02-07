import React, { useState } from 'react'
import AddNewBeer from './AddNewBeer'

const EmptyState = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='relative flex justify-center w-full h-[calc(100vh-150px)] text-center bg-zinc-100'>
        <div className='mt-[200px] mx-6'>
          <p className='text-gray-400'>Nothing to see yet.</p>
          <div>
            <span className='text-blue-600 font-medium cursor-pointer' onClick={() => setOpen(true)}>Click here </span>
            <span className='text-gray-400'>to add your first beer!</span>
          </div></div>
      </div>
      {open && <AddNewBeer open={open} setOpen={setOpen} />}
    </>
  )
}

export default EmptyState