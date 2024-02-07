import React, { useEffect, useState } from 'react'
import BeerCard from './BeerCard'
import { getAllBeersApi } from '../constants'
import Loader from './Loader'

const AllBearTab = () => {
  const [beers, setBeers] = useState([])
  const [pagination, setPagination] = useState({ page: 1, per_page: 10 })
  const [loading, setLoading] = useState(false)

  const fetchAllBears = async () => {
    try {
      setLoading(true)
      const response = await fetch(getAllBeersApi(pagination.page, pagination.per_page))
      const data = await response.json()
      setBeers([...beers, ...data])
      setPagination({
        ...pagination,
        page: pagination.page + 1
      })
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllBears()
  }, [])

  const loadMore = () => {
    fetchAllBears()
  }

  return (
    <>
      <div className='flex flex-wrap -mx-4'>
        {beers?.map((beer, index) => {
          return <BeerCard key={beer.id || index} beer={beer} />
        })}
      </div>
      <div className='text-center mb-12 text-blue-600 font-medium'>
        {loading ? <Loader /> : (
          <div onClick={loadMore} className='flex justify-center items-center cursor-pointer' role="button">
            <button className='mr-2'>
              Load More
            </button>
            <svg className="w-3 h-3 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
            </svg>
          </div>
        )}
      </div>
    </>

  )
}

export default AllBearTab