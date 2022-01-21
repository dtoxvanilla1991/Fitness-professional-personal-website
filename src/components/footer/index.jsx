import { BrandLogo } from "../brandLogo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { LeadAccessPage } from '../../containers/LeadAccessPage';

import {SocialIcon, PrivacyText, FLink, Title, LeftBottomContainer, RightBottomContainer, BottomContainer, ContentContainer, TopContainer, FooterContainer} from "./footerStyles";
// import { useMediaQuery } from "react-responsive";


export function Footer(props) {
 // optimizing in works..:
  // const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Categories</Title>
          <FLink to={`/allpackages`}>All Packages</FLink>
          <FLink to={`/ourmission`}>Our Mission</FLink>
          <FLink to={`/ourvalues`}>Our Values</FLink>
          <FLink to={`/education`}>Education</FLink>
          <FLink to={`/contacts`}>Contacts</FLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Access</Title>
          <FLink to={`/customer/access/:action`}>Login</FLink>
          <FLink to={`/customer/access/:action`}>Create Account</FLink>
          <FLink to={`/coachlogin`}>Login as Coach</FLink>
          <FLink to={`/jointeam`}>Become a Coach</FLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <BrandLogo hideLogo color="#8A8A8A" textSize={25} />
          <PrivacyText> &#169; All Rights Reserved. 2021</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}
