import {
    PageContainer,
} from "../../components/pageContainer";
import { Marginer } from '../../components/marginer';
import { ContentContainer } from "../../containers/HomePage/indexStyle";
import classes from "./ourMission.module.css";

//try out  useTransparent later too for NavBar :
export default function OurValues(props) {

    return (<PageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
            <h2>Our values</h2>
            <p>#1 value of Coello Cut is Integrity. Delivery on what is promised is guarunteed. We feel priviliged to serve our community.</p>
            <p>#2 value of Coello Cut is Consistency. Every day we work tirelessly to deliver you the best products and services and our ethic is impenetrable.</p>
        </ContentContainer>
        <Marginer direction="vertical" margin="4em" />

    </PageContainer>
    )
}