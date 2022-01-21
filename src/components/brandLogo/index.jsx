import { Link } from "react-router-dom";

import {BrandLogoContainer, LogoImage, LogoTitle} from "./brandLogostyles";

import LogoImg from "../../images/logo/coelloLogo.png";
// import { Link } from "react-router-dom";

export function BrandLogo(props) {
  const { logoSize, textSize, color } = props;

  return (
    <BrandLogoContainer>
      <Link to="/">
      <LogoImage size={logoSize}>
            <img src={LogoImg} alt="Coello Cut logo" />
          </LogoImage>
      </Link>
          <LogoTitle size={textSize} color={color}>
          Coello Cut
        </LogoTitle>
    </BrandLogoContainer>
  );
}