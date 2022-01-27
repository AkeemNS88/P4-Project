import React, { useState } from "react";
import portal from "./Images/p2.gif"
import { useNavigate } from 'react-router-dom'

function Welcome() {
    // const [formData, setFormData] = useState({
    //     username: "",
    //     password: "",
    //     });
    
    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };
    // function handleSubmit(e) {
    //     e.preventDefault();
    
    //     const userCreds = { ...formData };
    
    //     fetch("/users", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(userCreds),
    //     }).then((res) => {
    //         if (res.ok) {
    //         res.json().then((user) => {
    //         setCurrentUser(user);
    //         });
    //         } else {
    //         res.json().then((errors) => {
    //         console.error(errors);
    //         });
    //         }
    //     });
    // }
    let navigate = useNavigate();

    function handleClick(e){
        e.preventDefault()
        navigate("/choosefighter")
    }

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
                {/* onSubmit={handleSubmit}  this was on the form*/}
                <form className="input-form">
                    <label><strong>Username: </strong> 
                        <input 
                        id="username-signup-input"
                        type='text' 
                        name='name'
                        // value={formData.username}
                        // onChange={handleChange}
                        />
                    </label>
                    <label> <strong> Password: </strong>
                        <input
                        id="password-signup-input" 
                        type='text' 
                        password='password'
                        // value={formData.password}
                        // onChange={handleChange}
                        />
                    </label>
                </form>
            </div>
            <div className='enter-button'>
                <button onClick={handleClick}type="button" class="btn btn-dark btn-lg">Enter If You Dare</button>
            </div>
        </div>
    )
}

export default Welcome