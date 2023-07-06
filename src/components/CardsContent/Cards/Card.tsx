import { CardThumbnail, Img, Text, Section, ButtonPlay, DivImg } from "./card";
import Modal from "@/components/Modal/Modal";

import { Play } from "styled-icons/fa-solid";
import { CardProps } from "@/app/@types/types";

export default function Card(props: CardProps) {

  function handleOpenModal() {
    const modal = document.getElementById(props.title);
    return modal ? (modal.style.display = "flex") : null;
  }
  return (
    <Section>
      <CardThumbnail>
        <DivImg>
          <Img alt="" src="../images/thumbnail.png" />
          <ButtonPlay onClick={handleOpenModal}>
            <Play />
          </ButtonPlay>
        </DivImg>
        <Text>Como aumentar sua Geração de Leads feat. Traktor</Text>
        <Modal url={props.url} title={props.title} />
      </CardThumbnail>
    </Section>
  );
}
