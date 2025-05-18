import { useState, useEffect } from "react";
import { api } from "../api/axios";
import Pub from "./Pub";

interface User {
    _id: string;
    username: string;
    email: string;
}

interface PostProps {
    _id: string;
    user: User;
    title: string;
    content: string;
    createdAt: string;
}

function PubFeed(){
    const [posts, setPosts] = useState<PostProps[]>([]);

    async function fetchPost(){
        await api
            .get("posts/all")
            .then((response) =>{
                setPosts(response.data);
            } )
    }

    useEffect(() => {
        fetchPost();
    }, []);

    useEffect(() => {
        fetchPost();
    }, [posts]);

    return(
        <div>
            {
                posts.map((post) =>{
                    return(
                        // <div key={post._id} className="pub">
                        //     <h2>{post.title}</h2>
                        //     <p>{post.content}</p>
                        //     <p>Posted by: {post.user.username}</p>
                        //     <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
                        // </div>
                        <Pub key={post._id} {...post} />
                    )
                } )
            }
        </div>
    );
}

export default PubFeed;