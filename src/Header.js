import React from "react"

/**
 * Header component
 * This component displays the header for the Meme Generator application.
 */
export default function Header() {
    return (
        <header className="header">
            {/* Logo or image for the header */}
            <img 
                src="./troll1.jpeg" 
                className="header--image"
                alt="Troll face"
            />
            {/* Title of the application */}
            <h2 className="header--title">Meme Generator</h2>
            {/* Subtitle or project description */}
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}