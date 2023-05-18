import React from 'react'
import styled from "styled-components";
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                   <p className='intro-data'>Welcome to</p>
                   <h1>Gear Store</h1>
                   <p>
                   Gear Store is your one-stop shop for all the latest and greatest gadgets. We have a wide selection of products to choose from, including smartphones, tablets, laptops, TVs, cameras, and more. We also offer a variety of accessories, so you can customize your gadgets to fit your needs.
                   </p>
                   <NavLink>
                    <Button>shop now</Button>
                   </NavLink>
                </div>
                <div className='hero-section-image'>
                 <figure>
                    <img src='images/hero.jpg' alt='hero-section-photo' className='img-style'/>
                 </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
padding: 12rem 0;

img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {
  p {
    margin: 2rem 0;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
    color: #272524;
  }
}

.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: #e0c358;
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }

  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    /* bottom: 10%; */
    background-color: #e0c358;
  }
}`;

export default HeroSection