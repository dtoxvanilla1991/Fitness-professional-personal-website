import { BrandLogo } from "../brandLogo";
import { Marginer } from "../marginer";

import joinTeamImg from "../../images/joinTeam.png";
import { Button } from "../button";

import {StandoutImage, Slogan, SloganContainer, ContentContainer, JoinTeamContainer} from "./joinTeamstyles";

export function JoinOurTeam(props) {

  return (
    <JoinTeamContainer>
      <ContentContainer>
        <SloganContainer>
          <BrandLogo />
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>You love helping people</Slogan>
            <Slogan>and transform their health?</Slogan>
            <Slogan>Apply to join our team!</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.8em" />
          <Button size={15}>Join as Coach!</Button>
        </SloganContainer>
        <StandoutImage>
          <img src={joinTeamImg} alt="join-our-team" />
        </StandoutImage>
      </ContentContainer>
    </JoinTeamContainer>
  );
}
