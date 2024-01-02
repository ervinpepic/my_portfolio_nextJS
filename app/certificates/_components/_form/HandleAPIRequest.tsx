import axios from "axios";
import { useState } from "react";
import { z } from "zod";
import { School } from "../../Models/School";
import { CertificateSchema } from "../../validators/CertSchoolSchema";

const HandleAPIRequest = () => {
  const API_ENDPOINT = "/api/certificates";
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const addCertificate = async (newCertificate: School) => {
    try {
      const response = await axios.post(API_ENDPOINT, newCertificate);

      if (response.status === 200) {
        console.log(
          `Certificate added successfully: , ${newCertificate.schoolName}`
        );
      } else {
        console.error(
          `Error adding certificate: ${response.status} - ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(`Error adding certificate: ${(error as Error).message}`);
    }
  };

  const validateForm = ({
    schoolName,
    certificates: [{ title, subtitle, description, url }],
  }: School): boolean => {
    try {
      CertificateSchema.parse({
        schoolName,
        certificates: [
          {
            title,
            subtitle,
            description,
            url,
          },
        ],
      });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = error.errors.reduce(
          (acc: { [key: string]: string }, validationError) => {
            const path = validationError.path.join(".");
            acc[path] = validationError.message;
            return acc;
          },
          {}  
        );
        setErrors(newErrors);
      }
      return false;
    }
  };
  return { addCertificate, validateForm, errors };
};

export default HandleAPIRequest;
