import {
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestoreDB } from "@/app/firebase/config";
import { NextRequest } from "next/server";
import { CertificateSchema } from "@/app/certificates/validators/CertSchoolSchema";
import { School } from "@/app/certificates/Models/School";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = CertificateSchema.safeParse(body as School);

    if (result.success) {
      try {
        // Check if the school already exists
        const schoolQuery = query(
          collection(firestoreDB, "certificates"),
          where("schoolName", "==", result.data.schoolName)
        );
        const schoolSnapshot = await getDocs(schoolQuery);

        if (schoolSnapshot.size > 0) {
          // School already exists, get the existing school data
          const existingSchoolRef = schoolSnapshot.docs[0].ref;

          // Update the existing school with the new certificates
          await updateDoc(existingSchoolRef, {
            certificates: [
              ...schoolSnapshot.docs[0].data().certificates,
              ...result.data.certificates,
            ],
          });
        } else {
          // School doesn't exist, create a new school with the certificate
          await addDoc(collection(firestoreDB, "certificates"), result.data);
        }

        return new Response("Certificate added successfully", { status: 200 });
      } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
      }
    } else {
      return new Response(
        "Bad request: " + JSON.stringify({ errors: result.error.errors }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
