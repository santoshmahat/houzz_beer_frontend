import React from 'react'

const Tooltip = ({ message, children }) => {
  return (
    <div className="group relative inline-block text-blue-500 underline">
      {children}
      <span className="absolute hidden group-hover:flex -left-[4rem] -top-3 -translate-y-full w-40 px-2 py-2 bg-black rounded-md text-start text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
        {message}
      </span>
    </div>
  )
}

export default Tooltip