import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr repeat(4, 1.5fr) 30px;
  text-align: center;
  column-gap: 20px;
  height: 100px;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #131a22;
  transition: font-size 12s;
`;

export const HeaderLink = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    font-size: 2.2rem;
  }
`;
