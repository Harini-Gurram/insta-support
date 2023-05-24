
import { useEffect } from 'react';
import './App.css';


function App() {
  
  const handleClick=(event)=>{
    
    window.location.href='https://api.instagram.com/oauth/authorize?client_id=1379077412944454&redirect_uri=https://insta-basic.vercel.app/&scope=user_profile,user_media&response_type=code'
    
    
  }
  return (
    <div className="app">
      <div className='login-container'>
        <p className="p3">Follow these steps to fetch feed from instagram using Basic display APIs</p>
        <div className='button-container'>
          <button className="button" onClick={handleClick}>Get started</button>
        </div>
      </div>
    </div>
  );
}

export default App;
