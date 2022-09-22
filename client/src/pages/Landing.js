import React from 'react';
import main from '../assets/images/main.svg';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
// import Logo from '../components/Logo';
import {Logo} from '../components';
import { Link } from 'react-router-dom';

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
          <Link to='register' className='btn btn-hero'> Login / Register </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing;
