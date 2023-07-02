import { HeroStyle, Text, TitleTwo, TitleOne, Img, Webinar } from "./hero";
import Image from "next/image";
import asset from "../../app/assets/asset-header.png";

export default function Hero() {
  return (
    <HeroStyle>
        <Webinar>Webinars exclusivos</Webinar> 
      <TitleOne>Menos Conversinha,</TitleOne>
      <TitleTwo>
        Mais conversão{" "}
        <Img>
          <Image alt="" src={asset} />
        </Img>
      </TitleTwo>
      <Text>
        Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
        seu negócio
      </Text>
    </HeroStyle>
  );
}
