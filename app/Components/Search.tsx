"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const Search = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/articles/search?query=${query}`);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search articles..." 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </form>
            </div>
        </div>
    );
};

export default Search;