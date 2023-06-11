'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Search() {
    const [search,setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)

    }

  return (
    <div>
        
        <form className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end"
        onSubmit={handleSubmit}
        >
            <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                Search
                </label>
                <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    
                </div>
                    <input
                        id="search"
                        name="search"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                        placeholder="Search"
                        type="search"
                        
                    />
                </div>
                
            </div>
            <div className='pl-4'></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go</button>
        </form>
    </div>
  )
}
