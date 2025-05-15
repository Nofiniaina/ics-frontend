import axios from "axios";
import { useState, useEffect } from "react";

interface PostProps {
    user: string;
    title: string;
    content: string;
}

function Pub( post  : PostProps ){

    return(
        <div>

            <div className="pub-header">
                <div className="user">
                    <img src="" alt="" />
                    <p>Username: {post.user}</p>
                </div>
                <div className="options">
                    ...
                </div>
            </div>
            <div className="pub-content">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
            </div>
            <div className="pub-footer">

            </div>
        </div>
    );
}

export default Pub;