import React, { useState } from 'react';
import ScrollShowcase from './componentes/ScrollShowcase';
import Mariana from './componentes/Mariana.js';
import Trabalhos from './componentes/Trabalhos.js';
import Contactos from './componentes/Contactos.js';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState('#eu');

  return (
    <div className="App">
      <nav className="navbar">
  <div className="brand">Mariana Veiga</div>
  <ul className="menu">
    <li>
      <a
        href="#eu"
        className={activeMenu === '#eu' ? 'active eu' : ''}
        onClick={() => setActiveMenu('#eu')}
      >
        EU
      </a>
    </li>
    <li>
      <a
        href="#trabalhos"
        className={activeMenu === '#trabalhos' ? 'active trabalhos' : ''}
        onClick={() => setActiveMenu('#trabalhos')}
      >
        Trabalhos
      </a>
    </li>
    <li>
      <a
        href="#contactos"
        className={activeMenu === '#contactos' ? 'active contactos' : ''}
        onClick={() => setActiveMenu('#contactos')}
      >
        Contactos
      </a>
    </li>
  </ul>
</nav>


      <section id="eu">
        <Mariana />
       
      </section>

      <section id="trabalhos">
         <ScrollShowcase />
        <Trabalhos />
      
      </section>

      <section id="contactos">
         <Contactos />
      </section>
    </div>
  );
}

export default App;
