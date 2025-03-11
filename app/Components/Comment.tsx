import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface CommentProps {
    author: string;
    text: string;
    onEdit: () => void;
    onDelete: () => void;
}

const Comment = ({ author, text, onEdit, onDelete }: CommentProps) => {
    return (
        <div className="p-4 border rounded shadow-sm mt-5 relative">
            <h4 className="font-bold text-lg">{author}</h4>
            <p className="text-gray-700">{text}</p>
            <div className="absolute top-2 right-2 flex space-x-2">
                <FaEdit className="cursor-pointer text-blue-500" onClick={onEdit} />
                <FaTrash className="cursor-pointer text-red-500" onClick={onDelete} />
            </div>
        </div>
    );
}

export default Comment;