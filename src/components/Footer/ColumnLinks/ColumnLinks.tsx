import { Text, PageLink, DivColumnLinks } from "./columnLinks";

export interface ListProps {
  title: string;
  linkHref: [
    {
      name: string;
      linkRoute: string;
    }
  ];
}

export function ColumnLinks(props: ListProps) {
  return (
    <DivColumnLinks>
      <Text>{props.title}</Text>
      {props.linkHref?.map((link, index) => (
        <PageLink key={index} href={link.linkRoute}>
          {link.name}
        </PageLink>
      ))}
    </DivColumnLinks>
  );
}
