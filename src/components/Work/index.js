import React from 'react';

function Work(x) {
    const {currentSpot} = x;
    return (
    <section className='workname'>
        <h1 >{currentSpot.name}</h1>
        <div>{currentSpot.stuff}</div> 
    </section>
    )
}

export default Work;