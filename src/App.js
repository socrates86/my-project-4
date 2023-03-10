import React from 'react';
import Navbar from "./Navbar"
import Hero from './Hero';
import Card from './Card';
import data from './data';
import "./Navbar.css"
import "./Hero.css"
import "./Card.css"
// import logo from './logo.svg';
import './App.css';

export default function App() {
  const cards = data.map(item => {
    return(
      <Card
      key={item.id} 
      item={item}
      />
    )
  }) 

  return (
    <div className='container-md p-1 my-2 border'>
        <Navbar />
        <Hero />
        {<section className='cards-list'>
           {cards} 
          </section>}
        {cards}
    </div>
  )
}

