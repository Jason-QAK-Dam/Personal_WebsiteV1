import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #131a22;
  color: white;
  height: auto;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-around;

  & div {
    cursor: pointer;
    margin: 10px 20px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: centre;
  gap: 10px;
  font-size: 16pt;
  width: 40vw;
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  & button {
    width: 100%;
  }

  & div {
    margin: 5px 0px;
  }
`;

export const ContactNames = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  & textarea {
    background: white;
  }
`;
