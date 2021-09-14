import React from 'react';
import '../components/_header.scss';
import profilepicture from '../assets/images/lb-profilepicture.jpg';



const Header = () => {
    return(
        <header className="header">

            <h1>Léa Buguinet</h1>
            <h2>Web Developper</h2>

            <div className="profilepicture-border">
                <img className="profilepicture" src={ profilepicture } alt="Léa Buguinet" />
            </div>

            

        </header>

        
    )

    
}

export default Header;