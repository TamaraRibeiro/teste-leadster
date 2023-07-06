import Image from "next/image";
import {
  Section,
  LeadStyle,
  TextTitle,
  SectionText,
  Img,
  TextCreation,
  Button,
  SectionRdStation,
  SectionRating,
  TextRating,
  TextCard,
  DivImg,
  DivStation,
  SectionTwo,
} from "./leads";

import rd_station from "../../app/assets/selo_RD.png";
import no_card from "../../app/assets/no-card-dark.webp";
import rating from "../../app/assets/rating.webp";

export default function Leads() {
  return (
    <Section>
      <LeadStyle>
        <DivImg>
          <Img alt="" src="../images/comparativo_img_CTA.png" />
        </DivImg>
        
        <SectionTwo>
          <SectionText>
            <TextTitle>
              Pronto para triplicar sua
              <br />
              <b>Geração de Leads?</b>
            </TextTitle>
            <TextCreation>
              Criação e ativação em <b>4 minutos.</b>
            </TextCreation>
          </SectionText>
          <DivStation>
            <SectionRdStation>
              <Button>Ver demonstração</Button>
              <Image alt="" src={rd_station} />
            </SectionRdStation>
            <SectionRating>
              <Image alt="" src={no_card} />
              <TextCard>
                <b>Não</b> é necessário Cartão de Crédito |
              </TextCard>
              <Image alt="" src={rating} />
              <TextRating>
                <b>4.9/5</b> média de satifação
              </TextRating>
            </SectionRating>
          </DivStation>
        </SectionTwo>
      </LeadStyle>
    </Section>
  );
}
