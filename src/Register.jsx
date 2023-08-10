import React,{useState} from "react";
export const Register = (props) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const  [confirmPassword,setConfirmPassword] = useState("");

    const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(name);
    console.log(lastName);
    const requestData = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        name: name,
        lastName: lastName
    };
//Send request to server to register
    await fetch(`https://localhost:7268/api/account/register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    }).then((response) => {
        if (response.ok) {
            console.log("success");
            props.onFormSwitch("Login")
        } else {
            console.log("failure");
        }
    });
}

return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor = "Email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type = "text" name = "Email" id = "Email"/>
                <label htmlFor = "Name"> Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type = "text" name = "Name" id = "Name"/>
                <label htmlFor = "LastName">LastName</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type = "text" name = "LastName" id = "LastName"/>
                <label htmlFor = "Password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type = "password" name = "Password" id = "Password"/>
                <label htmlFor = "ConfirmPassword">Confirm Password</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type = "password" name = "ConfirmPassword" id = "ConfirmPassword"/>
                <button type="Submit">Submit</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("Login")}>Login</button>
        </div>
    )
}