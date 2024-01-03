import { Certificate } from "@/app/certificates/Models/Certificate";
import { firestoreDB } from "@/app/firebase/config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { NextResponse, type NextRequest } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { schoolName: string; title: string } }
)  {
  try {
    if (!params?.schoolName || !params?.title) {
      return new Response("Missing 'schoolName' or 'title' parameter", { status: 400 });
    }

    const schoolQuery = query(
      collection(firestoreDB, "certificates"),
      where("schoolName", "==", params.schoolName)
    );
    const schoolSnapshot = await getDocs(schoolQuery);

    if (schoolSnapshot.size > 0) {
      const existingSchoolRef = schoolSnapshot.docs[0].ref;

      // Find the certificate with the specified title and delete it
      const updatedCertificates = schoolSnapshot.docs[0].data().certificates.filter(
        (certificate: Certificate) => certificate.title !== params.title
      );

      if (updatedCertificates.length > 0) {
        // If there are remaining certificates, update the school entry
        await updateDoc(existingSchoolRef, {
          certificates: updatedCertificates,
        });
      } else {
        // If no more certificates, delete the entire school entry
        await deleteDoc(existingSchoolRef);
        return NextResponse.json({ message: "School and certificate deleted successfully" }, { status: 200 });
      }

      return NextResponse.json({ message: "Certificate deleted successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "School not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}