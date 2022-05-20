import './Entry.css';


function Entry() {
    return (
    <div >
        <div className='me'>
            <div className='totheleft'>
                <div className='leftwrap'>
                    <h2 className='name'>Sonny</h2>
                    <h2 className='name'>Tedesco</h2>
                    <p className='aboutme'>
                    Born and raised in Harlem. 
                    Currently working full time as
                    a Programming Engineer at Medfuse,
                    and studying at Rutgers. I have experience 
                    working with
                    </p>
                    <div className='langWrap'>
                        <div className='langRotate'>
                            <div className='lang'>C#</div>
                            <div className='lang'>HTML/CSS</div>
                            <div className='lang'>T-SQL</div>
                            <div className='lang'>BLAZOR</div>
                            <div className='lang'>JAVASCRIPT</div>
                            <div className='lang'>REACT</div>
                            <div className='lang'>NODE</div>
                            <div className='lang'>ASP.NET</div>
                            <div className='lang'>REST APIs</div>
                            <div className='lang'>NOSQL</div>
                            <div className='lang'>POWERSHELL</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='totheright'>the rest</div>
        </div>
    </div>
    );
  }

export default Entry;