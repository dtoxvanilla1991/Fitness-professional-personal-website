import {
    PageContainer,
} from "../../components/pageContainer";
import { Marginer } from '../../components/marginer';
import { ContentContainer } from "../../containers/HomePage/indexStyle";
import classes from "./ourMission.module.css";

//try out  useTransparent later too for NavBar :
export default function OurMission(props) {

    return (<PageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
            <h2>Our mission</h2>
            <p>Our mission is a health commitment: to you. Our goal is to make your body healthier, sexier. We take this job very seriously.</p>
        </ContentContainer>
        <Marginer direction="vertical" margin="4em" />

    </PageContainer>
    )
}