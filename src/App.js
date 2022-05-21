import React, {useState}  from 'react';
import Entry from './components/Entry/index.js';
import Navbar from './components/Navbar/index.js';
import Stuff from './components/Stuff/index.js';
import Contact from './components/Contact/index.js';
import './App.css';

function App() {
  const [spots] = useState([
    {
      name: 'work', description: 'some projects I have made for school in the past'
    },
    {
      name: 'resume', description: 'Resume'
    },
    {
      name: 'about me', description: 'about me'
    },
    {
      name: 'contact me', description: 'feel free to email me here'
    }
  ]);

  const [currentSpot, setCurrentSpot] = useState(spots[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Navbar
        spots = {spots}
        setCurrentSpot = {setCurrentSpot}
        currentSpot = {currentSpot}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Navbar>
      <main>
        {!contactSelected ? (
          <>
            <Entry></Entry>
            <Stuff> currentSpot={currentSpot}</Stuff>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
