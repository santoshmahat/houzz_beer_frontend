import React, { useCallback } from 'react'
import Tooltip from './Tooltip'

const BeerCard = ({ beer }) => {
  const getIngredients = useCallback((ingredients) => {
    if (!ingredients) return 'Ingredients: Not available'

    const ingredientsData = Object.keys(beer.ingredients).map((ingredient) => ingredient)?.join(', ')
    return `Ingredients: ${ingredientsData}`
  }, [beer?.ingredients])

  return (
    <div className='w-full lg:w-1/2 px-4 mb-8'>
      <div className='flex flex-wrap h-full items-center shadow-c-lg py-4 cursor-pointer hover:bg-blue-50'>
        <div className='w-[100px] text-center'>
          <Tooltip message={getIngredients(beer?.ingredients)}>
            <img src={beer.image_url} className='max-w-8 h-28' alt={beer.name} />
          </Tooltip>
        </div>
        <div className='w-[calc(100%-100px)] pr-4 sm:pr-8'>
          <p className='font-bold text-xl'>{beer.name}</p>
          <p className='font-semibold text-yellow-500 text-sm my-1'>{beer.tagline}</p>
          <p className='line-clamp-2'>{beer.description}</p>
        </div>
      </div>
    </div>
  )
}

export default BeerCard

