import React from "react";
import portal from "/home/abeab/Development/code/P4/P4-Project/client/src/Components/Images/p2.gif"

function Welcome() {




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
                <form className="input-form">
                    <label><strong>Username: </strong> 
                        <input type='text' name='name' />
                    </label>
                    <label> <strong> Password: </strong>
                        <input type='text' password='password'/>
                    </label>
                </form>
            </div>
            <div className='enter-button'>
                <button type="button" class="btn btn-dark btn-lg">Enter If You Dare</button>
            </div>
        </div>
    )
}

export default Welcome