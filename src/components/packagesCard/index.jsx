import { Marginer } from "../marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";

import {SaleText, PriceText, PriceContainer, RatingContainer, CoachName, Title, BottomContainer, ContentContainer, PackageThumbnail, TopContainer, CardContainer} from "./packageCardStyles";

export function PackageCard(props) {
  const { thumbnailUrl, coach, _id, title, rate, difficulty } = props;

  return (
    <CardContainer>
      <TopContainer>
        <PackageThumbnail>
          <img src={thumbnailUrl} alt={title} />
        </PackageThumbnail>
      </TopContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Marginer direction="vertical" margin={10} />
        <CoachName>
        <FontAwesomeIcon icon={faUser} size="sm" />
          {coach}
          </CoachName>
      </ContentContainer>
      <BottomContainer>
        <RatingContainer>
          <FontAwesomeIcon icon={faStar} size="sm" />
          {difficulty}
        </RatingContainer>
        <PriceContainer>
          <SaleText>SALE 30% OFF</SaleText>
          <PriceText>${rate}</PriceText>
        </PriceContainer>
      </BottomContainer>
    </CardContainer>
  );
}
