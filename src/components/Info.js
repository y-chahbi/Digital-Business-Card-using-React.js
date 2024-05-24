import React from "react"
import profile  from "../images/profile.png"



let name = "Laura Smith";
let job = "Frontend Developer";
let website = "laurasmith.website";





export default function Info () {
    return (
        <div className="Info">
            <div className="profile">
                <img className="img-profile" src={profile} alt="" />
            </div>
            <h1>{name}</h1>
            <span className="job">{job}</span>
            <a className="website" href="/">{website}</a>
            <button className="Email">Email</button>
            <button className="LinkedIn">LinkedIn</button>
        </div>
    )
}