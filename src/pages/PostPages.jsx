import React from "react";
import { useParams, useLocation } from 'react-router-dom';
import './assets/css/PostPages.style.css';

const PostPage = () => {
    const { id } = useParams();
    const { state } = useLocation();

    return (
        <div className="Detail-post">
            <h1 className="Title-post">Post {id}</h1>
            <p className="Content">{state?.content}</p>
        </div>
    )
}

export default PostPage;