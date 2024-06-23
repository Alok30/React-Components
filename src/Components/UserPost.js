import { useState, useEffect } from 'react';
import { callApi } from '../utils';

export const UserPost = () => {
    //local states
    const [posts, setPosts] = useState([]);

    //display posts by user
    const showPosts = () => {
        return (
            <div>
                {posts.map(post => (
                    <div key={post?.id}>{post?.title}</div>
                ))}
            </div>
        )
    }

    //api call 
    const fetchData = async () => {
        const result = await callApi();
        setPosts(result);
    };

    //effect 
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h1>PostByUser</h1>
            {showPosts()}
        </div>
    )
}
