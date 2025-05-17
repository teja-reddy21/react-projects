import React, { useEffect, useState } from 'react'

function Resize() {

const [screenSize,setScreenSize]=useState({
    width:window.innerWidth,
    height:window.innerHeight,
});

const updateScreenSize=()=>{
    setScreenSize({
        width:window.innerWidth,
        height:window.innerHeight,
    });
}

useEffect(()=>{
  window.addEventListener('resize',updateScreenSize)

  return ()=>{
    window.removeEventListener('resize',updateScreenSize)
  }
},[])

  return (
    <div>
        <h1>Screen Size</h1>
        <p>Resize the window to see the screen size</p>
        <p style={{color:"Red"}}>width:{screenSize.width}px</p>
        <p style={{color:"Red"}}>height:{screenSize.height}px</p>
    </div>
  )
}

export default Resize