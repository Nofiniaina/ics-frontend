import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../api/axios";

interface PostProps {
    user: string;
    title: string;
    content: string;
}

function PubFeed(){
    const [post, setPost] = useState<PostProps>({
        user: "",
        title: "",
        content: ""
    });

    async function fetchPost(){
        await api
            .get("posts/all")
            .then((response) =>{
                console.log(response.data);
            } )
    }

    useEffect(() => {
        fetchPost();
    }, [post]);


    return(
        <div>
            {
                
            }
        </div>
    );
}

export default PubFeed;