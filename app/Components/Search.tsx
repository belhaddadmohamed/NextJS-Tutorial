import React from 'react'

const Search = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md">
                <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    )
}

export default Search