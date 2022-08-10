import React from "react";
import { SocialMediaContainer, SocialMediaIcons } from "./footer_styles";
import { Facebook, Twitter, Instagram, Youtube } from "react-bootstrap-icons";
function SocialMediaCard() {
  return (
    <SocialMediaContainer>
      <div>Social Media</div>
      <SocialMediaIcons>
        <div>
          <Facebook />
        </div>
        <div>
          <Twitter />
        </div>
        <div>
          <Instagram />
        </div>
        <div>
          <Youtube />
        </div>
      </SocialMediaIcons>
    </SocialMediaContainer>
  );
}

export default SocialMediaCard;
