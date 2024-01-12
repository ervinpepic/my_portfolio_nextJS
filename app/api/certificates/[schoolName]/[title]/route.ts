import { firestoreDB } from "@/app/firebase/config";
import {
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { NextResponse, type NextRequest } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { schoolName: string; title: string } }
) {
  try {
    if (!params?.schoolName || !params?.title) {
      return new Response("Missing 'schoolName' or 'title' parameter", {
        status: 400,
      });
    }

    const certificateQuery = query(
      collection(firestoreDB, "certificates"),
      where("schoolName", "==", params.schoolName),
      where("title", "==", params.title)
    );

    const certificateSnapshot = await getDocs(certificateQuery);

    if (certificateSnapshot.size > 0) {
      const certificateRef = certificateSnapshot.docs[0].ref;

      // Delete the certificate document
      await deleteDoc(certificateRef);

      return NextResponse.json(
        { message: "Certificate deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Certificate not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error during certificate deletion:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
