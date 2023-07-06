import Card from "./Cards/Card";
import { DivCards, Section } from "./cardsContent";
import { CardProps } from "@/app/@types/types";

const cardDb: CardProps[] = [
  {
    url: "https://www.youtube.com/embed/Ejkb_YpuHWs",
    title: "video1",
  },
  {
    url: "https://www.youtube.com/embed/-FQP7hD-J6A",
    title: "video2",
  },
  {
    url: "https://www.youtube.com/embed/5nLixjy29bc",
    title: "video3",
  },
  {
    url: "https://www.youtube.com/embed/8Rxl4Bk7-qc",
    title: "video4",
  },
  {
    url: "https://www.youtube.com/embed/dw4IGIBlNUc",
    title: "video5",
  },
  {
    url: "https://www.youtube.com/embed/d46G_aOKalE",
    title: "video6",
  },
  {
    url: "https://www.youtube.com/embed/nnETLsX88d4",
    title: "video7",
  },
  {
    url: "https://www.youtube.com/embed/ilYBH0mMjZQ",
    title: "video8",
  },
  {
    url: "https://www.youtube.com/embed/L5R_ZYo-_68",
    title: "video9",
  },
];

export default function CardsContent() {
  return (
    <Section>
      <DivCards>
        {cardDb.map((card, index) => (
          <Card key={`${card}` + index} url={card.url} title={card.title} />
        ))}
      </DivCards>
    </Section>
  );
}
