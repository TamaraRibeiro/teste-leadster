export interface ButtonProps {
  text: string;
}

export interface ListProps {
  title: string;
  linkHref: { 
    name: string; 
    linkRoute: string; 
  }[];
}

export interface CardProps {
    url: string;
    title: string;
}