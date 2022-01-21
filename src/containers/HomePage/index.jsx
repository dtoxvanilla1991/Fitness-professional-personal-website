import {TopSection} from "./topSection";
import {
    PageContainer,
  } from "../../components/pageContainer";
import { Packages } from './packages';
import { JoinOurTeam } from '../../components/joinOurTeam';
import { Marginer } from '../../components/marginer';
import {ContentContainer} from "./indexStyle";

//try out  useTransparent later too for NavBar :
export function HomePage (props) {
    return ( <PageContainer>
        <TopSection/>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
        <Packages top={4} />
        </ContentContainer>
        <Marginer direction="vertical" margin="4em" />
        <JoinOurTeam />
    </PageContainer>
    )
}
