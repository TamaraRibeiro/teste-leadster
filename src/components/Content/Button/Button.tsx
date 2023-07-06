import { ButtonProps } from "@/app/@types/types";
import { ButtonStyle } from "./button";

export default function Button(props: ButtonProps){
    return(
        <ButtonStyle>
            {props.text}
        </ButtonStyle>
    )
}