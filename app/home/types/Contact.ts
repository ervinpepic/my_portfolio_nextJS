export interface Links {
  url: string;
  Icon: React.ComponentType<{}>;
}
export interface Contact {
  title: string;
  subtitles: Record<string, string>;
  description: string;
  links: Links[];
}
