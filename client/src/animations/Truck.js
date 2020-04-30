import styled from '@emotion/styled';
import React from 'react';
import { keyframes } from '@emotion/core';
import SmallTruck from '../assets/truck.svg';

const startLeft = keyframes`

0%{
  left:-60%; top:0px; opacity:1;
  }
  
100%
{left:100%; top:0px; opacity: 0; width: 0%
height: 0%
}
 
`;

const LogoTruck = styled.img`
  align-self: flex-start;
  margin-top: 25px;
  position: relative;
  animation: ${startLeft} 5s ease-in-out forwards;
`;

export default function Truck() {
  return <LogoTruck src={SmallTruck}></LogoTruck>;
}
