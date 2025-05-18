import { useState } from 'react';
import { api } from '../api/axios';


interface PubFormProps {
    user: string;
    title: string;
    content: string;
}



function PubForm(){
    const [post, setPost] = useState<PubFormProps>({
        user: "",
        title: "",
        content: ""
    });

    const userId = localStorage.getItem("userId");

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        if(userId){
            const newPost = { ...post, user: userId };
           try {
                await api
                    .post("/posts/create", newPost)
                    .then((response) => {
                        console.log(response.data);
                        setPost({ ...post, title: "", content: "" });
                    })
                    .catch((error) => {
                        console.log(error.response.data.message);
                    });
           } catch (error) {
                console.error(error);
           }     
        }
    }

    return(
        <div className="pub-container">
            <h1>Create pub</h1>
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <label htmlFor="">Title</label>
                    <input type="text" 
                        value={post.title}
                        onChange={(e) => setPost({ ...post, title: e.target.value })}
                    />
                </div>
                <div className="content">
                    <label htmlFor="">Content</label>
                    <textarea name="" id="" 
                        value={post.content}
                        onChange={(e) => setPost({ ...post, content: e.target.value })}
                    ></textarea>
                </div>
                <button type="submit">Publish</button>
            </form>
        </div>
    );
}

export default PubForm;