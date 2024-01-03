import axios from "axios";
import { useState } from "react";
import { z } from "zod";
import { School } from "../../../certificates/Models/School";
import { CertificateSchema } from "../../../certificates/validators/CertSchoolSchema";

export const useDataPosting = () => {
  const API_ENDPOINT = "/api/certificates";
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const addCertificate = async (newCertificate: School): Promise<void> => {
    try {
      const response = await axios.post(API_ENDPOINT, newCertificate);

      if (response.status === 200 || response.status === 201) {
        console.log(`Certificate added successfully: ${newCertificate.schoolName}`);
        // You might want to perform additional actions upon success
        // Reset errors state if needed
        setErrors({});
      } else {
        console.error(`Error adding certificate: ${response.status} - ${response.statusText}`);
        // Handle different HTTP status codes appropriately
      }
    } catch (error) {
      console.error(`Error adding certificate: ${(error as Error).message}`);
    }
  };

  const validateForm = ({ schoolName, certificates: [{ title, subtitle, description, url }] }: School): boolean => {
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

  return { addCertificate, validateForm, errors, setErrors };
};
