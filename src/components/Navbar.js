import React, {useState}from 'react';
import { Link } from 'react-router-dom';
//import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                AddBros <i classname='fab fa-typo3' />
            </Link>
            <div className='menu-icon'onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Inicio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/met' className='nav-links' onClick={closeMobileMenu}>
                        Metodos
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/soluciones' className='nav-links' onClick={closeMobileMenu}>
                        Soluciones
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/recursos' className='nav-links' onClick={closeMobileMenu}>
                        Recursos
                    </Link>
            </li>
            </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar
