import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { FiSearch } from "react-icons/fi"

const Searchbar = () => {
  const navigate = useNavigate()
  const [searchString, setSearchString] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchString}`)
  }
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-500 focus-within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center hover:border-solid hover:border-2 hover:border-gray-400">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          type="search"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Searchbar
