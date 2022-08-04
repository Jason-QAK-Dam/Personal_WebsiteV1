import Typing from "react-type-animation";
import styled from "styled-components";

const AnimationContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 8rem;
  font-weight: bold;
`;

export const TypingAnimation = () => {
  return (
    <AnimationContainer>
      <span>I am a </span>
      <Typing
        cursor={true}
        sequence={["programmer", 5000, "developer", 5000, "YouTuber", 5000]}
        wrapper="span"
        repeat={Infinity}
      />
    </AnimationContainer>
  );
};
