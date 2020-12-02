import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/videos/23.jpg' alt="fodoschidos"/>
      <h2>AddBros tools</h2>
      <p>Resuelva problemas de programacion lineal con un solo clic</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Iniciar
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
