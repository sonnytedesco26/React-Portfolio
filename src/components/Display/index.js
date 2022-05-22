import React from "react";
import './display.css';

function ProjectList() {
    return (
        <div className="projcase">
            <article className="proj">
                <h5>Run-Buddy</h5>
                <h6>Html/CSS</h6>
                <a href="https://sonnytedesco26.github.io/run-buddy/"> 
                <img src="images/runbuddy.png" alt="Run Buddy page"  /> 
                </a>
            </article>
            <article className="proj">
                <h5>PWA-Budget-Tracker</h5>
                <h6>JavaScript/HTML/CSS</h6>
                <a href="https://sonny-pwa-budget-tracker.herokuapp.com/"> 
                <img src="images/pwa.png" alt="Budget Tracker App" /> 
                </a>
            </article>
            <article className="proj">
                <h5>Password Generator</h5>
                <h6>JavaScript/HTML/CSS</h6>
                <a href="https://sonnytedesco26.github.io/PasswordGenerator/"> 
                <img src="images/passwordgenerator.png" alt="Password Generator" /> 
                </a>
            </article>
            <article className="proj">
                <h5>MVC-TECH-BLOG</h5>
                <h6>JS/Handlebars/CSS</h6>
                <a href="https://github.com/sonnytedesco26/MVC-TECH-BLOG"> 
                <img src="images/MVC.png" alt="MVC-TECH-BLOG" /> 
                </a>
            </article>
            <article className="proj">
                <h5>Car Dealership Inventory</h5>
                <h6>JS/Handlebars/CSS</h6>
                <a href="https://github.com/Xcamaj/Dealership-inventory"> 
                <img src="images/carr.png" alt="Car Dealership Inventory" /> 
                </a>
            </article>
        </div>
    );
};

export default ProjectList;