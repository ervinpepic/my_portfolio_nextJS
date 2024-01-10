export interface Skills {
  title: string;
  subtitles: Record<string, string>;
  programmingLang: { name: string; framework: string }[];
  otherSkills: { name: string; framework: string }[];
  icons: (React.ComponentType<{}> | React.FC<{}>)[];
}
