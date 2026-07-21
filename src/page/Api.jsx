import React, { useEffect, useState } from "react";

const Api = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        async function getData() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            const data = await response.json();

            setPosts(data);
        }

        getData();

    });


    return (
        <div>
            <h1>Blog Posts</h1>

            {posts.map((post) => (
                <div key={post.id}>
                    <ul>
                        <li ><h2>{post.title}</h2></li>
                        {/* <li><h2>{post.body}</h2></li> */}
                    </ul>
                </div>
            ))}

        </div>
    );
};

export default Api;