import React, { useContext } from 'react'
import { BeerContext } from '../contexts/BeerContext'
import BeerCard from './BeerCard'
import { HOUZZ_BEER_IMAGE } from '../constants'
import EmptyState from './EmptyState'

const MyBeerTab = () => {
  const { myBeers } = useContext(BeerContext)

  const normalizedBeerData = myBeers?.map((beer) => ({ ...beer, image_url: HOUZZ_BEER_IMAGE }))

  if (!normalizedBeerData?.length) return <EmptyState />

  return (
    <div className='flex flex-wrap -mx-4'>
      {normalizedBeerData?.map((beer) => {
        return <BeerCard beer={beer} />
      })}
    </div>
  )
}

export default MyBeerTab