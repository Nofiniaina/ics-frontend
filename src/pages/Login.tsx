import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../api/axios";

interface LoginProps {
    username: string;
    password: string;
}

function Login(){
    const [user, setUser] = useState<LoginProps>({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api
                .post("/users/login", user)
                .then((response) =>{
                    const token = response.data.token;
                    localStorage.setItem("userToken", token);
                    navigate("/home");
                })
                .catch((error)=>{
                    console.log(error.response.data.message);
                })
        } catch (error) {
            console.error(error);
        }
    } 

    return(
        <div className="page-container">
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Username</label>
                        <input type="text" 
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" 
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <button type="submit">Log in</button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
            </div>
        </div>
        
    );
}

export default Login;