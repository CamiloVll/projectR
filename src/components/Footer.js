import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-investigation'>
        <p className='footer-investigation-heading'>
          Proyecto Investigacion de Operaciones
        </p>
        <p className='footer-Investigation-text'>
        Desarrollado por Cesar Camilo, Luis Chavelas, Jordi Hernandez, Arit Santamaria.
        </p>
        <div className='input-areas'>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AddBros
            </Link>
          </div>
          <small class='website-rights'>AddBros Company 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/profile.php?id=100044725177225'
              target='_blank'
              aria-label='Facebook'
              rel="noopener noreferrer"
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
              rel="noopener noreferrer"
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link github'
              href='https://github.com/'
              target='_blank'
              aria-label='Github'
              rel="noopener noreferrer"
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/'
              target='_blank'
              aria-label='Twitter'
              rel="noopener noreferrer"
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link linkedIn'
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
              rel="noopener noreferrer"
            >
              <i class='fab fa-linkedIn' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
