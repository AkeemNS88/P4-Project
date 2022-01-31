import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const LoginForm = ({setCurrentUser}) => {

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""      
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

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user)
                    setFormData({
                        username: "",
                        password: ""
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

    return (
        <div className="welcome">
            <h1 className="welcome">Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    id="username-input"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                    id="password-input"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <br />
        </div>
    );
};

export default LoginForm;