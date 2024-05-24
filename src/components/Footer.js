import React from "react"
import twitter from "../icons/twitter.png"
import instagram from "../icons/instagram.png"
import facebook from "../icons/facebook.png"
import github from "../icons/github.png"

export default function Footer () {
    return (
        <div className="Footer">
            <div className="Soc">
                <a href="twitter.com"> <img src={twitter} alt=""/></a>
                <a href="facebook.com"> <img src={facebook} alt=""/></a>
                <a href="instagram.com"> <img src={instagram} alt=""/></a>
                <a href="github.com"> <img src={github} alt=""/></a>
            </div>
        </div>
    )
}