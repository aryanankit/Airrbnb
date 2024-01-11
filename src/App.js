import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import {data} from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list" style={{width:'50%', paddingLeft: '80px'}}>
                {cards}
            </section>
        </div>
    )
}