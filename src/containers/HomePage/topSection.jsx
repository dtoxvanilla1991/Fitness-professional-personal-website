import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import TopSectionBackgroundImg from "../../images/landingPageBG.jpg";
import ATeamImg from "../../images/ATeam1.png";
import { BrandLogo } from "../../components/brandLogo";
import { Button } from "../../components/button";


const TopSectionContainer = styled.div`
    width: 100%;
    height:800px;
    background: url(${TopSectionBackgroundImg});
    background-position: 0px 0px;
    background-size: cover;
`;

const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(61, 39, 84, 0.80);
display: flex;
flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-item: center;
margin-top: 150px;
justify-content: space-evenly;
`;

const StandoutImage = styled.div`
    width: 25em;
    height: 25em;

    img{
        width: 100%;
        height: 100%;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    margin-top: 100px;
    flex-direction: column;
`;

const SloganText = styled.h3`
margin: 0;
line-height: 1.3;
color: #fff;
font-weight: 500;
font-size: 22px;
`;

export function TopSection(props) {

    const {children} = props;

    return (<TopSectionContainer>
        <BackgroundFilter>
            {children}
            <TopSectionInnerContainer>
                <LogoContainer>
                    <BrandLogo />
                    <Marginer direction="vertical" margin={20} />
                    <SloganText>
                       Find the perfect plan for you: 
                    </SloganText>
                    <SloganText>
                       Pay for the results, not membership! 
                    </SloganText>
                    <Marginer direction="vertical" margin={30} />
                    <Button ml={110} width={40}>Join now!</Button>
                </LogoContainer>
                <StandoutImage>
                    <img src={ATeamImg} alt="best in sports"></img>
                </StandoutImage>
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>
    )
}
