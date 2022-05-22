import React, {useState}  from 'react';
import Navbar from './components/Navbar';
import Entry from './components/Entry';
import Contact from './components/Contact';
import Work from './components/Work';
import Display from './components/Display';
import Resume from './components/Resume';
import Aboutme from './components/Aboutme';
import Footer from './components/footer';

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
      stuff: <Resume />
    },
    {
      name: 'about me', 
      description: 'about me',
      stuff: <Aboutme />
    }
  ]);

  const [currentSpot, setCurrentSpot] = useState(spots[0]);
  const [contactSelected, setContactSelected] = useState(false);


  const mainStyle = {
    display:'flex'
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
          <Footer />
    </div>
  );
}

export default App;
