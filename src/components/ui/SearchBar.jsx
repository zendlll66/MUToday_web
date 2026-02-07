"use client"
import React from 'react'


const SearchBar = ({ placeholder = 'ค้นหา', onSearch, className = '' }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const searchValue = formData.get('search')
        if (onSearch && searchValue) {
            onSearch(searchValue)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`w-full ${className}`}>
            <div className="relative w-full flex items-center">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                    <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    name="search"
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-purple-300 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                />
            </div>

        </form>
    )
}

export default SearchBar
