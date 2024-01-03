import { School } from "@/app/certificates/Models/School";
import { CertificateSchema } from "@/app/certificates/validators/CertSchoolSchema";
import { firestoreDB } from "@/app/firebase/config";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const orderedCertList = query(
      collection(firestoreDB, 'certificates'),
      orderBy('schoolName', 'asc')
    )
    const querySnapshot = await getDocs(orderedCertList);
    const schoolsData = querySnapshot.docs.map(
      (school) => school.data() as School
    );

    return NextResponse.json(schoolsData, { status: 200 });
  } catch (error) {
    console.error("Error while fetching data from Firebase: ", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

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

        return NextResponse.json(
          { message: "Certificate added successfully" },
          { status: 200 }
        );
      } catch (error) {
        console.error(error);
        return NextResponse.json(
          { error: "Internal Server Error" },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { errors: result.error.errors },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
