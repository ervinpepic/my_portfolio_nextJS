import { Certificate } from "./Certificate";

export interface School {
    school_id: number;
    school_name: string;
    certificates: Certificate[];
  }