import React,{useState} from "react";


export const Login = (props) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    
        const requestData = {
            email: email,
            password: password
        };
    //send request to server to login
        await fetch(`https://localhost:7268/api/account/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        }).then(async(response) => {
            if (response.ok) {
                const token = await response.json(); 
                console.log("success");
                props.onFormSwitch("Home")
            } else {
                console.log("failure");
            }
        });
    };

// create login form
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor = "Email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type = "text" name = "Email" id = "Email"/>
                <label htmlFor = "Password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type = "password" name = "Password" id = "Password"/>
                <button type="submit">Submit</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("Register")}>Register</button>
        </div>
    )
}