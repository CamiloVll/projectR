import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Principales Temas</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <CardItem
              src='images/1.png'
              text='Metodo grafico para 2 variables de decisión'
              label='Investigación'
              path='/graphic'
            />
            <CardItem
              src='images/2.jpg'
              text='Método simplex resolver problemas de optimización'
              label='Investigación'
              path='/simplex'
            />
            <CardItem
              src='images/3.jpg'
              text='Solución óptima de un problema con el Analisis de Sensibilidad'
              label='Investigación'
              path='/sensibility'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
