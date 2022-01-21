import styled from "styled-components";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "7em")};
  height: ${({ size }) => (size ? size + "px" : "3em")};
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "45px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 700;
  margin-left: 6px;
`;

export {BrandLogoContainer, LogoImage, LogoTitle};