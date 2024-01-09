export interface Links {
    url: string,
    Icon: React.ComponentType<{}>;
}
export interface ContactCardDataStructureInterface {
  title: string;
  subtitles: Record<string, string>;
  description: string;
  links: Links[];
}
