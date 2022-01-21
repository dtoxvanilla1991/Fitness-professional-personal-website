import styled from "styled-components";

const JoinTeamContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: rgba(61, 39, 84, 0.80);
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;

  }
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;

`;

const StandoutImage = styled.div`
  width: 35em;
  height: 29em;

  img {
    width: 100%;
    height: 100%;
  }
`;

export {StandoutImage, Slogan, SloganContainer, ContentContainer, JoinTeamContainer};