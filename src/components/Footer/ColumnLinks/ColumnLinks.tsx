import { ListProps } from '@/app/@types/types';
import { Text, PageLink, DivColumnLinks } from "./columnLinks";

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
