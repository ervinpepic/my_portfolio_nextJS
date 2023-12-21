interface Certificate {
  certificate_id: number;
  title: string;
  subtitle: string | null;
  description: string | null;
  url: string | null;
}

export interface School {
  school_id: number;
  school_name: string;
  certificates: Certificate[];
}
