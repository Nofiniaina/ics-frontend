

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

function Pub( post  : PostProps ){

    return(
        <div>

            <div className="pub-header">
                <div className="user">
                    {/* <img src="" alt="" /> */}
                    <p>Username: {post.user.username}</p>
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