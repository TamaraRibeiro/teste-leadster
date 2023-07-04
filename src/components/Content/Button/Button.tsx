import { ButtonStyle } from './button';

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