import {
  Section,
  Icons,
  Video,
  Webinar,
  Description,
  Downloads,
  ModalContent,
  TitleWebinar,
  TextWebinar,
  Title,
  Text,
  Buttons,
  TextOne,
  ButtonClose,
  IconButton,
} from "./modal";

import { Close, CloudDownload } from "styled-icons/fa-solid";
import { CardProps } from "@/app/@types/types";

export default function Modal({ url, title }: CardProps) {

  function handleCloseModal() {
    const modal = document.getElementById(title)
    return modal ? modal.style.display = "none" : null
  }

  return (
    <Section id={title}>
      <Icons>
        <IconButton>
          <CloudDownload />
          Spreadsheet.xls
        </IconButton>
        <IconButton>
          <CloudDownload />
          Document.doc
        </IconButton>
        <IconButton>
          <CloudDownload />
          Presentation.ppt
        </IconButton>
        <IconButton>
          <CloudDownload />
          Folder.zip
        </IconButton>
      </Icons>
      <ModalContent>
        <ButtonClose onClick={handleCloseModal}>
          <Close />
        </ButtonClose>
        <Webinar>
          <TextOne>
            <TitleWebinar>Webinar:</TitleWebinar>
            <p>Como aumentar sua</p>
          </TextOne>
          <TextWebinar>Geração de Leads feat. Traktor</TextWebinar>
        </Webinar>
        <Video
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <Description>
          <Title>Descrição</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a
            dui velit. Duis eget pellentesque eros. Curabitur vehicula dolor
            eget lectus fermentum, ac suscipit massa.
          </Text>
        </Description>
        <Downloads>
          <Title>Downloads</Title>
          <Buttons>
            <IconButton>
              <CloudDownload />
              Spreadsheet.xls
            </IconButton>
            <IconButton>
              <CloudDownload />
              Document.doc
            </IconButton>
            <IconButton>
              <CloudDownload />
              Presentation.ppt
            </IconButton>
          </Buttons>
        </Downloads>
      </ModalContent>
    </Section>
  );
}
