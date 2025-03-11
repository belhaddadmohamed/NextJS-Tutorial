import React from 'react';

interface CommentProps {
    author: string;
    text: string;
}

const Comment: React.FC<CommentProps> = ({ author, text }) => {
    return (
        <div>
            <h4>{author}</h4>
            <p>{text}</p>
        </div>
    );
}

export default Comment;