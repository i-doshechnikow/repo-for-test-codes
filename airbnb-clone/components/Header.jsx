import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import { useState } from 'react'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { DateRangePicker } from 'react-date-range'

export default function Header() {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date(2022, 1, 11))
  const [endDate, setEndDate] = useState(new Date())

  let selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'Selection',
  }

  console.log(searchInput)
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* left - logo */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/*  middle - search */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          className="flex-grow bg-transparent pl-4 text-sm text-gray-600 placeholder-gray-400 outline-none"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex cursor-pointer items-center space-x-2 rounded-full border-2 p-2 md:shadow-sm">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div>
          <DateRangePicker ranges={[selectionRange]} />
        </div>
      )}
    </header>
  )
}
