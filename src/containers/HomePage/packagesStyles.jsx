import styled from "styled-components";
import { Button } from "../../components/button";
import { deviceSize } from "../../components/responsive";

const PackagesContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

const Title = styled.h1`
font-weight: 900;
color: #000;
@media screen and (max-width: ${deviceSize.mobile}px) {
  font-size: 25px;
}
`;

const PackagesWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
aling-items: center;
`;

const BottomContainer = styled.div`
justify-content: center;
  width: 100%;
display: flex;

`;

const WarningText = styled.h3`
color: rgba(100, 100, 100);
font-weight: 500;
`;

const ViewMoreButton = styled(Button)`
margin-top: 10px;
width: 25%;
background-color: #f2f2f2;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
color: #959595;
font-size: 14px;
&:hover {
  background-color: #f2f2f2;
  filter: contrast(0.8);
}
`;

export {ViewMoreButton, WarningText, BottomContainer, PackagesWrapper, Title, PackagesContainer};