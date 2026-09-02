
import { useEffect, useState } from "react";

import React from 'react'
// import users from "../../backend/data/users";

const Api = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        async function rn() {
            // const res = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts/");
            const res = await fetch("http://localhost:5000/api/users")
            const data = await res.json();
            setPost(data)
        }
        rn();
    }, [])
    return (
        <>
            <h2>Post</h2>

            {post.map((pp) => (
                <ul>
                    <li>
                        <div key={pp.id}>
                            <h2>{pp.name}</h2>
                        </div>
                    </li>
                </ul>

            ))}

        </>
    )
}

export default Api

