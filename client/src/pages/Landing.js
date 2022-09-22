import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="logo" className='logo '/>
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>Job <span>tracking</span>app</h1>
          <p>This is details</p>
          <button className='btn btn-hero'> Login / Register </button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </main>
  )
}

export default Landing
