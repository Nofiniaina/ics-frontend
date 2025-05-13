function Signup(){
    return (
        <div className="signup-container">
            <h1>Sign up</h1>
            <form action="" method="post">
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <label htmlFor="">Confirm password</label>
                    <input type="password" />
                </div>
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default Signup;