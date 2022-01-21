import styled from "styled-components";
import { Link } from "react-router-dom";


const NavbarContainer = styled.div`
width: 100%;
height: 65px;
display: flex;
border-bottom : 1px solid #fff;
align-items: center;
justify-content: space-between;
padding: 0 1.5em;

background-color: ${({ useTransparent }) =>
  useTransparent ? "transparent" : "rgba(61, 39, 84, 1)"};
`;

const AccessibilityContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
`;

const AnchorLink = styled(Link)`
font-size: 12px;
color: #fff;
cursor: pointer;
text-decoration: none;
outline: none;
transition: all 200ms ease-in-out;
&:hover {
  filter: contrast(0.6);
}
`;

const Seperator = styled.div`
min-height: 35%;
width: 1px;
background-color: #fff;
`;

export {Seperator, AnchorLink, AccessibilityContainer, NavbarContainer};