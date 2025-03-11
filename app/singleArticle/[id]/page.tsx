"use client"

import { useEffect, useState } from 'react';
import { use } from 'react';
import Comment from '@/app/Components/Comment';
import { toast } from 'react-toastify';

interface Article {
    id: number;
    title: string;
    body: string;
    params: Promise<{ id: string }>
}

const SingleArticlePage = ({params} : Article) => {
    const { id } = use(params);
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        if (id) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => response.json())
                .then(data => setArticle(data))
                .catch(error => console.error('Error fetching article:', error));
        }
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    function handleEdit(): void {
        prompt("Start editing..")
    }

    function handleDelete(): boolean {
        toast.success('Comment deleted successfully')
        return false
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-lg text-gray-700">{article.body}</p>

            <hr className='mt-6' />
            <h2 className='text-xl underline italic'> Comments </h2>
            <Comment author={'Belhaddad.M.I'} text={'This is a good article'} onEdit={handleEdit} onDelete={handleDelete} />
            <Comment author={'Belhaddad.M.I'} text={'This is a good article'} onEdit={handleEdit} onDelete={handleDelete} />
            <Comment author={'Belhaddad.M.I'} text={'This is a good article'} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default SingleArticlePage;