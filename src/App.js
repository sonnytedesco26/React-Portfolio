import React, {useState}  from 'react';
import Navbar from './components/Navbar';
import Entry from './components/Entry';
import Contact from './components/Contact';
import Work from './components/Work';
import Display from './components/Display';

function App() {
  const [spots] = useState([
    {
      name: 'work', 
      description: 'some projects I have made for school in the past',
      stuff: <Display />
    },
    {
      name: 'resume', 
      description: 'resume',
      stuff: ''
    },
    {
      name: 'about me', 
      description: 'about me',
      stuff: ''
    }
  ]);

  const [currentSpot, setCurrentSpot] = useState(spots[0]);
  const [contactSelected, setContactSelected] = useState(false);

  const mainStyle = {
    display:'flex',
    alignItems: 'center'
  };

  return (
    <div>
      <Navbar
        spots = {spots}
        setCurrentSpot = {setCurrentSpot}
        currentSpot = {currentSpot}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Navbar>
    <main style={mainStyle}>
        {!contactSelected ? (
          <>
            <Entry></Entry>
            <Work currentSpot={currentSpot}></Work>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>  
    </div>
  );
}

export default App;
