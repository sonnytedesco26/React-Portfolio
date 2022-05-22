import React from 'react';
import './work.css';

function Work(x) {
    const {currentSpot} = x;
    return (
    <section className='totheright'>
        <h1>{currentSpot.name}</h1>
        <p>{currentSpot.stuff}</p> 
    </section>
    )
}

export default Work;