import React from "react"

export default function Header(){
    return (
        <header>
            <img className="biopic" src="../img/ProfilePic.jpeg" />
            <h1>Taylor Hershberger</h1>
            <p className="title">Front-End Web Developer</p>
            <p className="email">taylor.day.hershberger@gmail.com</p>
            <button className="email-button"><img className="email-icon" src="../img/Mail.svg" />Email</button>
        </header>
    )
}