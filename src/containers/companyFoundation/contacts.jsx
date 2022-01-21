import {
    PageContainer,
} from "../../components/pageContainer";
import { Marginer } from '../../components/marginer';
import { ContentContainer } from "../../containers/HomePage/indexStyle";
import classes from "./ourMission.module.css";

//try out  useTransparent later too for NavBar :
export default function Contacts(props) {

    return (<PageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
            <h2>Contacts</h2>
            <p>Be so kind to email us at: coellocut@gmail.com</p>
        </ContentContainer>
        <Marginer direction="vertical" margin="4em" />

    </PageContainer>
    )
}