import React from "react";
function Login({
 isLoggedIn, setIsLoggedIn}) {
    function handleSubmit(event) {
        event.preventDefault();
        setIsLoggedIn(true);
    }

    if(isLoggedIn){
        return <h2>You are Logged In!! </h2>;

    }

    return (
        <div> 
            <h2>Login Form</h2>
            <form onSubmit = {handleSubmit}>
                <input 
                type = "text"
                placeholder = "Enter Username"
                required
                />
                <br /> <br />
                <input 
                type = "password"
                placeholder = "Enter password"
                required
                />
                <br/><br/>
                <input 
                type = "password"
                placeholder = "Enter password"
                required
                />
                <br/><br/>
                <button type = "submit">
                    Login
                    </button>
            </form>
        </div>
    );


}

export default Login;