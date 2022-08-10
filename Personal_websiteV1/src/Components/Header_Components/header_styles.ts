import styled from "styled-components";

export const HeaderContainer = styled.div`
  postion: absolute;
  top: 0px;
  left: 0px;
  padding: 10px 100px;
  display: grid;
  grid-template-columns: 2fr repeat(4, 3fr);
  text-align: center;
  height: 100px;
  font-size: 2em;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #131a22;
`;

export const HeaderLink = styled.span`
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: black;
    padding: 10px 25px;
    border-radius: 25px;
  }
`;

export const Logo = styled.div`
  font-family: "Quentin", serif;
  font-size: 4rem;
  text-align: left;
`;
