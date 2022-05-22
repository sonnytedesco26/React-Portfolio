import React from "react";

function Navbar(x) {
    const {
        spots = [],
        setCurrentSpot,
        contactSelected,
        currentSpot,
        setContactSelected
    } = x;

    return(
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/" className="home">
          Sonny Tedesco
        </a>
      </h2>
      <nav>
        <ul className="flex-row">

          {spots.map((spot) => (
            <li 
              className={`mx-1 ${
                currentSpot.name === spot.name && !contactSelected &&'navHover'
                }`}
              key={spot.name}
            >
              <span
                onClick={() => {
                  setCurrentSpot(spot);
                  setContactSelected(false);
                }}
              >
                {spot.name}
              </span>
            </li>
            
          ))
          }         
          <li className={`mx-2 ${contactSelected && 'navHover'}`}>
            <span onClick={() => setContactSelected(true)}>contact me</span>
          </li>
        </ul>
      </nav>
    </header>
    )
};

export default Navbar;