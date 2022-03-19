import React, { useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { GlobeAltIcon, MenuIcon, SearchIcon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';
const menus = [
  'Messages',
  'Notifications',
  'Trips',
  'Wishlists',
  'Manage Listing',
  'Account',
  'Help',
  'Log out',
];
function NavBar({ wheel, upDateEvent }: any) {
  const [showSearchBar, searchBarClicked] = useState(false);
  useEffect(() => {
    searchBarClicked(wheel);
  }, [wheel]);
  return (
    <nav className='mo-nav'>
      <div className='mo-nav-upper '>
        <div className='mo-heading'>Morning</div>
        {!showSearchBar ? (
          <div className='mo-rent-type'>Places to Stay</div>
        ) : (
          <div className='flex items-center'>
            <button
              className='bg-white shadow-lg rounded-full h-12 p-3 flex justify-between items-center w-72 text-black border border-gray-200'
              onClick={() => {
                searchBarClicked(false);
                upDateEvent(false);
              }}
            >
              <span className='inline-block text-sm font-sans font-semibold'>
                Start your search
              </span>
              <span className='inline-flex h-full p-4 bg-red-500 rounded-full  items-center justify-center'>
                <SearchIcon className='w-5 text-white' />
              </span>
            </button>
          </div>
        )}

        <div className='mo-country-setting'>
          <button className='mo-nav-buttons'>Switch to Hosting</button>
          <button className='mo-nav-buttons'>
            <GlobeAltIcon className='h-5 w-5 text-black rounded-full' />
          </button>
          <Menu as='div' className='relative'>
            <Menu.Button
              as='button'
              className='mo-nav-buttons border border-gray-200 bg-white shadow-md hover:bg-slate-50 flex items-center justify-between focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75'
            >
              <MenuIcon className='h-5 w-5 text-custom-black mr-2' />
              <UserCircleIcon className='h-7 w-7 text-custom-black' />
            </Menu.Button>
            <Menu.Items
              as='div'
              className='absolute origin-top right-0 w-60 p-2 mt-2 bg-white flex flex-col shadow-lg rounded-lg focus:outline-none'
            >
              {menus.map((menu) => (
                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } flex rounded-md items-center w-full px-2 py-2 text-base font-sans`}
                      >
                        {menu}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <div
        className={`absolute inset-x-0 top-20 origin-top transition-all duration-200 ease-linear bg-gray-100 left-0 ${
          showSearchBar ? 'translate-x-full' : 'translate-x-0'
        } h-24 z-10`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        provident mollitia accusantium magni molestiae! Officia vel suscipit
        nulla cumque, eaque ut deserunt vero dicta, dolores et omnis quam
        consequuntur ratione?
      </div>
    </nav>
  );
}

export default NavBar;
