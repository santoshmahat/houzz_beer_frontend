import React, { useState } from 'react';
import AllBearTab from './AllBeerTab';
import AddNewBeer from './AddNewBeer';
import MyBeerTab from './MyBeerTab';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [open, setOpen] = useState(false)

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='mx-8 lg:mx-16'>
      <div className="flex w-full flex-wrap">
        <button
          className={`inline-block py-4 px-2 rounded-t-lg  ${activeTab === 1 ? 'font-bold' : 'font-medium text-gray-400'}`}
          type="button"
          role="tab"
          onClick={() => handleTabClick(1)}
        >
          All Beers
        </button>
        <button
          className={`inline-block p-4 rounded-t-lg ${activeTab === 2 ? 'font-bold' : 'font-medium text-gray-400'}`}
          type="button"
          role="tab"
          onClick={() => handleTabClick(2)}
        >
          My Beers
        </button>
        {activeTab === 2 && (
          <button
            type="button"
            className="px-4 py-2 self-center ml-2 sm:ml-auto md:ml-auto lg:ml-auto xl:ml-auto text-sm text-center text-white font-medium bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => setOpen(true)}
          >
            Add a new beer
          </button>
        )}
      </div>

      <div className="mt-4">
        {activeTab === 1 && <AllBearTab />}
        {activeTab === 2 && <MyBeerTab />}
      </div>

      {open && <AddNewBeer open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Tabs;
