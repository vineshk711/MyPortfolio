import React from 'react'
import Card from './card'
import project1Photo from '../data/project1.jpeg'
import project2Photo from '../data/project2.jpeg'
import './componentStyles/projectPage.css'

export default function ProjectsPage() {
    return (
        <div>
            <div className="cards-container">
                <Card className="project1"
                    photo={project1Photo}
                    subtitle="E-COMMERCE WEBSITE WITH PAYMENT GATEWAY"
                    title="Sell Your Products"
                    description="The wuicsk borown fox jumpsj ovjak ihdk thel whye are ouf"
                />
                <Card className="project2"
                    photo={project2Photo}
                    subtitle="A FRONTEND ONLY PROJECT"
                    title="My Portfolio"
                    description="This is my portfolio only forntend hosted on github.io"
                />
            </div>
            
        </div>
    )
}
