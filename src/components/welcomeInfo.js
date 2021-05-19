import React from 'react'
import './componentStyles/welcomeInfo.css'

export default function WelcomeInfo() {
    return (
        <div className="welcome-info-container">
            <div className="hello-container">
                <div className="introduction">INTRO</div>
                <div className="hello">Hello.</div>
                <div className="detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde similique voluptatibus placeat hic nam? Perferendis illum eligendi repellat in temporibus.</div>
                <div className="btn-container">
                    <div className="btn btn-primary">Resume</div>
                    <div className="btn btn-primary btn-black">Projects</div>
                </div>
            </div>

        </div>
    )
}
