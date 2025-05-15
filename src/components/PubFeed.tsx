import { useState, useEffect } from "react";
import axios from "axios";

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
        await axios
            .get("http://localhost:3000/api/posts/all")
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