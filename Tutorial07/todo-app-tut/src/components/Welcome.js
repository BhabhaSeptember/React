import React from 'react';

export default function Welcome() {
    return (
        <div className="welcome">
            <h1>Todo list</h1>
            <div className="login-container">
                <input type="email"/>
                <input type="password"/>
                <button>Sign In</button>
                <a href="">Create an account</a>
            </div>
        </div>
    )
}