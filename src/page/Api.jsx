
import { useEffect, useState } from "react";

import React from 'react'

const Api = () => {
    const [post, setPosts] = useState([]);
    useEffect(() => {
        async function rn() {
            // const res = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts/");
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json();
            setPosts(data)
        }
        rn();
    })
    return (
        <>
            <h2>Post</h2>

            {post.map((post) => (
                <ul>
                    <li>
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                        </div>
                    </li>
                </ul>

            ))}

        </>
    )
}

export default Api

