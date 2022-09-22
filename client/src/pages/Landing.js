import React from 'react';
import main from '../assets/images/main.svg';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
// import Logo from '../components/Logo';
import {Logo} from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo></Logo>
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
    </Wrapper>
  )
}

export default Landing;
