import React from "react";
import SocialMediaCard from "./SocialMediaCard";
import Contact from "./Contact";
import { FooterContainer } from "./footer_styles";
export default function Footer() {
  return (
    <FooterContainer>
      <SocialMediaCard />
      <Contact />
    </FooterContainer>
  );
}
