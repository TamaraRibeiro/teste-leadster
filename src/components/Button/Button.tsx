import { ButtonStyle } from './button.styled';

interface ButtonProps{
    text: string;
}

export default function Button(props: ButtonProps){
    return(
        <ButtonStyle>
            {props.text}
        </ButtonStyle>
    )
}