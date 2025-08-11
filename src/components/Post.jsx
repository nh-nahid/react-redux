import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../features/posts/postSlice';

const Post = () => {
    const {isLoading, isError, posts, error} = useSelector((state) => state.posts)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])

    let content;

    if(isLoading){
        content = <h3>Loading posts...</h3>
    }
    if(!isLoading && isError){
        content = <h3>Something wrong happened - {error}</h3>
    }
    if(!isLoading && !isError){
        if(posts.length > 0){
            content = (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    )
                    )}
                </ul>
            )
        }else{
            content = <h3>No posts found</h3>
        }
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default Post;