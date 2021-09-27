import React from 'react';
import '../components/_header.scss';
import profilepicture from '../assets/images/lb-profilepicture.jpg';



const Header = () => {

    // Declare a new state variable with the "useState" Hook
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;

    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
        the "width" state variable when the window size changes */
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        /* passing an empty array as the dependencies of the effect will cause this
        effect to only run when the component mounts, and not each time it updates.
        We only want the listener to be added once */

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

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