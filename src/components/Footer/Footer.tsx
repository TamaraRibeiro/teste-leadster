import Image from "next/image";
import logo from "../../app/assets/logo.png";
import {
  DivLogo,
  Text,
  FooterStyle,
  DivLinks,
  DivColumnSocial,
  TitleColumnSocial,
  TextCaption,
  TextContentSocial,
  SocialButtons,
} from "./footer";
import { ColumnLinks } from "./ColumnLinks/ColumnLinks";
import { ListProps } from '@/app/@types/types';

import {
  FacebookWithCircle,
  InstagramWithCircle,
  LinkedinWithCircle,
} from "styled-icons/entypo-social";

export default function Footer() {
  const ColumnDataArray: ListProps[] = [
    {
      title: "Links Principais",
      linkHref: [
        { name: "Home", linkRoute: "/" },
        { name: "Feramenta", linkRoute: "/" },
        { name: "Preços", linkRoute: "/" },
        { name: "Contato", linkRoute: "/" },
      ],
    },
    {
      title: "Cases",
      linkHref: [
        { name: "Geração de Leads B2B", linkRoute: "/" },
        { name: "Geração de Leads em Software", linkRoute: "/" },
        { name: "Geração de Leads em Imobiliaria", linkRoute: "/" },
        { name: "Cases de Sucesso", linkRoute: "/" },
      ],
    },
    {
      title: "Materiais",
      linkHref: [
        { name: "Blog", linkRoute: "/" },
        { name: "Parceria com Agências", linkRoute: "/" },
        { name: "Guia Definitivo do Marketing", linkRoute: "/" },
        { name: "Materiais Gratuitos", linkRoute: "/" },
      ],
    },
  ];

  return (
    <FooterStyle>
      
      <DivLogo>
        <Image alt="logo" src={logo} />
        <Text>Transformando visitantes em clientes.</Text>
      </DivLogo>

      <DivLinks>
        {ColumnDataArray.map((item, index) => (
          <ColumnLinks
            key={index}
            title={item.title}
            linkHref={item.linkHref}
          />
        ))}

        <DivColumnSocial>
          <TitleColumnSocial>Siga a Leadster</TitleColumnSocial>

          <SocialButtons>

              <LinkedinWithCircle />
              <FacebookWithCircle />
              <InstagramWithCircle />

          </SocialButtons>

          <TextCaption>
            E-mail:
            <TextContentSocial href="mailto:contato@leadster.com.br">
              contato@leadster.com.br
            </TextContentSocial>
          </TextCaption>
          <TextCaption>
            Telefone:
            <TextContentSocial href="tel:+5542988289851">
              (42) 98828-9851
            </TextContentSocial>
          </TextCaption>
        </DivColumnSocial>
      </DivLinks>
    </FooterStyle>
  );
}
