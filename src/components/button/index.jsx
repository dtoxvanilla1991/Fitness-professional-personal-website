import {ButtonWrapper} from "./buttonStyles";

export function Button(props) {
  const { size, ml, width } = props;

  return (
    <ButtonWrapper size={size} ml={ml} width={width} className={props.className}>
      {props.children}
    </ButtonWrapper>
  );
}
 