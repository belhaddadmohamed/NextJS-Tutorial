"use client";
import React, { useEffect, useState } from 'react';
import Pagination from '../Components/Pagination';
import Link from 'next/link';
import Search from '../Components/Search';

interface Post {
    id: number;
    title: string;
    body: string;
}

const Page = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    // Pagination variables
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Articles</h1>
            <Search />

            <ul className="space-y-4 mb-4">
                {posts.slice(0, 6).map(post => (
                    <li key={post.id} className="bg-white shadow-md rounded-lg p-6">
                        <Link href={`/singleArticle/${post.id}`}>
                            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-700">{post.body}</p>
                        </Link>
                    </li>
                ))}
            </ul>

            <Pagination
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={(page: number) => setCurrentPage(page)} />
        </div>
    );
};

export default Page;