import React from 'react'
import ReactImg from '../assets/react-core-concepts.png'
import './header.css'


const Header = () => {

    const Array = ['Fundamental', 'Static', 'Core']
    // console.log("Array length",Array.length)
    
    const randomArray = (max)=>{
        const randomNo  = Math.floor(Math.random()*(max + 1))
       return randomNo;
    }

   

  return (
    <header>
        <img src = {ReactImg} alt="Stylized atom"  />
        <h1>React Essentials</h1>
        <p>
          {Array[randomArray(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>

        
      </header>
  )
}

export default Header