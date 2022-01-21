import styled from "styled-components";
import { deviceSize } from '../../components/responsive';

const ContentContainer = styled.div`
width: 100%;
max-width: ${deviceSize.laptop}px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1em;

@media screen and (max-width: ${deviceSize.mobile}px) {
  padding: 5px;
}
`;

export {ContentContainer};