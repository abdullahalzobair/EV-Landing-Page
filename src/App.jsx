import React,{ useState, useEffect } from 'react';
import Background from "./components/background/Background"
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"What you love"},
    {text1:"Indulge",text2:"Your passions"},
    {text1:"Give in to",text2:"Your passions"},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect (()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000); 
  },[])
  
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero 
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        />
    </div>
  )
}

export default App