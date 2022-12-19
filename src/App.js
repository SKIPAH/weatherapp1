import './App.css';
import { useEffect, useState } from 'react';
import Weather from './Weather';



function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
      }, (error) =>{
        alert(error);
      })
    }else{
      alert('your browser does not support geolcation')
    }
  }, [])

  if(isLoading) {
    return <p>Loading location...</p>
  }else {
    return (
      <div className='content'>
      <h3>
        Your position is
      </h3>
      <p>
        Position:&nbsp;
        {lat.toFixed(3)},
        {lng.toFixed(3)},
      </p>
      <div>
        <Weather lat={lat} lng={lng}/>
      </div>
      </div>
      
    );
  }
  }

  

export default App;