import React, { useContext, useState } from "react";
import { BeerContext } from "../contexts/BeerContext";
import { HOUZZ_BEER_IMAGE, REQUIRED_FIELDS_MESSAGE } from "../constants";

const AddNewBeer = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({})
  const [formError, setFormError] = useState('')
  const { setMyBeers } = useContext(BeerContext)

  const handleFormChange = (event) => {
    setFormError('')
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const addNewBeer = (event) => {
    try {
      event.preventDefault()
      setFormError('')
      if (Object.keys(formData)?.length < 3) {
        return setFormError(REQUIRED_FIELDS_MESSAGE)
      }
      setMyBeers(current => [...current, formData]);
      setFormData({})
      setOpen(false)
    } catch (error) {

    }
  }

  return (
    <>
      {open ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-4/6 my-6 mx-auto">
              <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <form className="p-4 md:p-5">
                  <h3 className="mb-4 text-lg font-medium">
                    Add a New Beer
                  </h3>

                  <div className="flex justify-center w-24 h-28 mb-4 border">
                    <img src={HOUZZ_BEER_IMAGE} className='w-6 h-20 m-auto' />
                  </div>
                  <input
                    id="name"
                    name="name"
                    className="mb-4 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5"
                    placeholder="Beer name*"
                    required
                    onChange={handleFormChange}
                  />
                  <input
                    id="genre"
                    name="tagline"
                    className="mb-4 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5"
                    placeholder="Genre*"
                    required
                    onChange={handleFormChange}

                  />
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    className="mb-4 block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Description*"
                    onChange={handleFormChange}
                    required
                  >
                  </textarea>
                  {formError && (
                    <p className="text-red-500">{formError}</p>
                  )}
                  <p></p>
                  <div className="flex justify-end items-center space-x-4 text-gray-400 text-sm">
                    <button onClick={() => setOpen(false)}>
                      Cancel
                    </button>
                    <button type="submit" className="px-6 py-2 self-center text-sm text-center text-white font-medium bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-600" onClick={addNewBeer}>
                      Save
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default AddNewBeer