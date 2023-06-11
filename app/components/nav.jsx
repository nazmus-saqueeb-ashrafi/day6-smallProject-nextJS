import React from 'react'
import Search from './search'

export default function Nav() {
  return (

    <div className="max-w-9xl mx-auto px-2 sm:px-4 lg:px-8 bg-gray-600">
      <div className="relative flex items-center justify-between h-16 ">
        {/* logo */}
        <div className="flex items-center px-2 lg:px-0">
        <div className="flex-shrink-0">
            <p className="block lg:hidden h-8 w-auto font-bold">Rocket Wiki</p>
            <p className="hidden lg:block h-8 w-auto font-bold">Rocket Wiki</p>
            
        </div>
        
        </div>

        {/* search */}
        <Search/>
              
            
      </div>
    </div>
    
  )
}
