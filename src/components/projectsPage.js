import React from 'react'
import Card from './card'
import photo from '../data/project1.jpeg'
export default function ProjectsPage() {
    return (
        <div>
            <Card
                photo={photo}
                subtitle="E-COMMERCE WEBSITE WITH PAYMENT GATEWAY"
                title="Sell Your Products"
                description="The wuicsk borown fox jumpsj ovjak ihdk thel whye are ouf"
            />
        </div>
    )
}
