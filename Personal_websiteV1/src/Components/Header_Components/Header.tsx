import React from "react";
import { HeaderContainer, HeaderLink, Logo } from "./header_styles";
function Header() {
  return (
    <HeaderContainer>
      <Logo>JDam</Logo>
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
