import { Certificate } from "@/app/certificates/Interfaces/Certificate";
import { validationSchema } from "@/app/certificates/_components/_form/validators/YupValidationSchema";
import { firestoreDB } from "@/app/firebase/config";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query
} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import * as Yup from "yup";

export async function GET(request: NextRequest) {
  try {
    const orderedCertificateList = query(
      collection(firestoreDB, 'certificates'),
      orderBy('schoolName', 'asc')
    )
    const querySnapshot = await getDocs(orderedCertificateList);
    const certificatesBySchool: Record<string, Certificate[]> = {};

    querySnapshot.forEach((doc) => {
      const certificate = doc.data() as Certificate;

      if (certificatesBySchool[certificate.schoolName]) {
        certificatesBySchool[certificate.schoolName].push(certificate);
      } else {
        certificatesBySchool[certificate.schoolName] = [certificate];
      }
    });

    return NextResponse.json(certificatesBySchool, { status: 200 });
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

    try {
      await validationSchema.validate(body, { abortEarly: false });

      const { schoolName, title, subtitle, description, url } = body;

      // Add a new document to the "certificates" collection
      await addDoc(collection(firestoreDB, 'certificates'), {
        schoolName,
        title,
        subtitle,
        description,
        url,
      });

      return NextResponse.json(
        { message: 'Certificate added successfully' },
        { status: 200 }
      );
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) {
        const yupErrors = validationError.inner.map((err) => ({
          path: err.path,
          message: err.message,
        }));

        return NextResponse.json(
          { error: 'Validation Error', validationErrors: yupErrors },
          { status: 400 }
        );
      }
      console.error(validationError);
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}