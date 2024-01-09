export interface CardDataStructureInterface {
  title: string;
  subtitles: Record<string, string>;
  programmingLang: { name: string; framework: string }[];
  other: { name: string; framework: string }[];
  icons: React.ComponentType<{}>[];
}
