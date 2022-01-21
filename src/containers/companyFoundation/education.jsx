import {
    PageContainer,
  } from "../../components/pageContainer";
import { Marginer } from '../../components/marginer';
import {ContentContainer} from "../../containers/HomePage/indexStyle";

//try out  useTransparent later too for NavBar :
export default function Education (props) {
    return ( <PageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
        <h3>Why you can and should trust us on this:</h3>
        </ContentContainer>
        <Marginer direction="vertical" margin="4em" />

    </PageContainer>
    )
}
