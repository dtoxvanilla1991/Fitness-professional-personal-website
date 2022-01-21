import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";

import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import {Seperator, AnchorLink, AccessibilityContainer, NavbarContainer} from "./navbarStyles";

export function Navbar(props) {
  const { useTransparent } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <AccessibilityContainer>
        <AnchorLink>Trainers Portal</AnchorLink>
        <Marginer direction="horizontal" margin={10} />
        <Seperator />
        <Marginer direction="horizontal" margin={10} />
        <Link to="/customer/access/signup">
        <Button size={10} marginLeft={0} >Register</Button>
        </Link>
        <Marginer direction="horizontal" margin={8} />
        <AnchorLink to="/customer/access/signin">Login</AnchorLink>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
