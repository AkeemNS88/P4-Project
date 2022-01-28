import React, { useState } from "react";
import portal from "./Images/p2.gif"
import { useNavigate } from 'react-router-dom'
import LoginForm from "./LoginForm"

function Welcome({ currentUser, setCurrentUser }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        biography: "",
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    function handleSubmit(e) {
        e.preventDefault();

        const userCreds = { ...formData };

        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user)
                    setFormData({
                        username: "",
                        password: "",
                        biography: "",
                    });
                });
                navigate("/choosefighter")
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }

        });
    }

    let navigate = useNavigate();

   
    return (
        <div>
            <div className="welcome">
                <h1 className="welcome">Welcome to Cascade</h1>
            </div>
            <div>
                <img className='portal' src={portal} />
            </div>
            <div>
                <h3 className="acc-title">Make An Account</h3>
                
                <form onSubmit={handleSubmit} className="input-form">
                    <label><strong>Username: </strong>
                        <input
                            id="username-input"
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </label>
                    <label> <strong> Password: </strong>
                        <input
                            id="password-input"
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    <label> <strong> Biography: </strong>
                        <input
                            id="bio-input"
                            type='biography'
                            name='biography'
                            value={formData.biography}
                            onChange={handleChange}
                        />
                    </label>
                    <div className='enter-button'>
                        <button type="submit" class="btn btn-dark btn-lg">Enter If You Dare</button>
                    </div>
                </form>
                <div> <LoginForm /> </div>
            </div>
        </div>
    )
}

export default Welcome