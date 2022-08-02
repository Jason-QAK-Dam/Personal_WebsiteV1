import React from "react";
import { HeaderContainer, HeaderLink } from "./header_styles";
function Header() {
  return (
    <HeaderContainer>
      <div>Jason Dam</div>
      <div>
        <HeaderLink>Home</HeaderLink>
      </div>
      <div>
        <HeaderLink>Projects</HeaderLink>
      </div>
      <div>
        <HeaderLink>Photography</HeaderLink>
      </div>
      <div>
        <HeaderLink>Videos</HeaderLink>
      </div>
    </HeaderContainer>
  );
}

export default Header;
