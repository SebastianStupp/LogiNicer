import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export const flyFromRight = keyframes`
0%{
  right:-60%; top:40px; opacity:1; 
  }
  80%{
    right:3%; top:20px ;  opacity: 1; 
  }
100%
{right:3%; top:40px; opacity: 0; width: 0%
height: 0%; 
}
`;

const Confirm = styled.div`
  border: 5px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0px 5px 0px ${(props) => props.theme.colors.tertiary};
  margin: 10px;
  padding: 10px;
  font-size: 0.9rem;
  background: ${(props) => props.theme.colors.secondary};
  position: fixed;
  z-index: 1;
  animation: ${flyFromRight} 2.5s ease-in-out forwards;
`;

export default Confirm;
