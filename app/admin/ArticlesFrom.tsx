'use client';
import React, { useState } from 'react';

const ArticlesFrom = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Article Submitted:', { title, content });
        // Reset form fields
        setTitle('');
        setContent('');
    };

    return (
        <div className="max-w-xl mx-auto p-5 border border-gray-300 rounded-lg">
            <h2 className="text-center text-2xl mb-5">Submit a New Article</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block mb-2">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded h-36"
                    />
                </div>
                <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ArticlesFrom;