import React from "react";
import account from "./Images/account.jpg"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

const Account = ({currentUser, setCurrentUser}) => {

    const [userData, setUserData] = useState({});
    
        useEffect(() => {
          fetch('/me')
              .then(r => r.json())
              .then(data => setUserData(data))
            }, [])
     
                
                function display(){
                    const total = userData?.encounters?.length
                   return(<h3 className="acc-title">You have survived a total of {total} encounters so far!</h3>)
     }



     const [formData, setFormData] = useState({
        biography: "",
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit() {

        const userCreds = { ...formData };

        fetch("/patch", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user)
                    setFormData({
                        biography: "",
                    });
                });
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }

        });
    }

     //update method to change bio

     //delete account

     // home page


    let navigate = useNavigate();

    function handleClick() {
        navigate('/choosefighter')
    }
    function handleLogout() {
            fetch("/delete", { 
                method: 'DELETE'
            })
            navigate('/')
        }
    
    
    return (
        <div>
            <div>
                <h1 className="encounter-title">My Account </h1>
            </div>
            <div>
                <img className="encounter-image" src={account} alt="ur account" />
            </div>
            <div>
                <h3 className="acc-title"> Username: {userData.username} </h3>
                <h3 className="acc-title"> Bio: "{userData.biography}" </h3>
            </div>
            <div>
                {display()}
            </div>
            <div className="change-bio">

            <form onSubmit={handleSubmit} className="input-form">
                    <label><strong>Change Biography: </strong>
                        <input
                            id="biography-input"
                            type='text'
                            name='biography'
                            value={formData.username}
                            onChange={handleChange}
                            />
                    </label>
                    </form>
                            </div>
            <div className="choice-button">
            <button onClick={handleClick} class="btn-secondary btn-lg"> Play Again? </button>
            <button onClick={handleSubmit} class="btn-secondary btn-lg"> Change Bio </button>
                <button onClick={handleLogout} class="btn-secondary btn-lg"> Delete Account Forever :(</button>
            </div>
        </div>
    )
}

export default Account