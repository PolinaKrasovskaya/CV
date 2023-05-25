import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Summary = styled.div`
display: flex;
`

export const Link = styled(NavLink)`
  display: flex;
  padding: 5px;
  width: 80px;
  height: 20px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
  border-radius: 10px;
  text-decoration: none;

  font-size: 14px;
  letter-spacing: 0.03em;
  font-weight: 700;
  background-color: #ffe1b5;
  color: #49091a;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);

  &:hover {
    background-color: #49091a;
    color: #ffe1b5;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    text-decoration: underline;
  }
`;
