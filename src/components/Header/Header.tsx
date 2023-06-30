import Image from "next/image";
import logo from '../../app/assets/logo.png'
import { HeaderStyle } from "./header.styled";

export default function Header(){
    return (
        <HeaderStyle>
            <Image alt="logo" src={logo}/>
        </HeaderStyle>
    )
}