
import {
  CardThumbnailRound,
  CardThumbnailFlat,
  Img,
  Text,
  Section,
} from "./cards";

export default function Card() {
  return (
    <Section>
      <CardThumbnailRound>
        <Img alt="" src="../images/thumbnail.png" />
        <Text>Como aumentar sua Geração de Leads feat. Traktor</Text>
      </CardThumbnailRound>
    </Section>
  );
}
