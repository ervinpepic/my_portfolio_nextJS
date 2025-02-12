import { authOptions } from "@/app/auth/authOptions";
import { firestoreDB } from "@/app/firebase/config";
import {
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getServerSession } from "next-auth";
import { NextResponse, type NextRequest } from "next/server";

export async function DELETE(request: NextRequest) {
  const session = await getServerSession(authOptions);

  // Extract parameters from the URL using 'nextURL"
  const { pathname } = new URL(request.url);
  const pathParts = pathname.split('/');
  const schoolName = pathParts[pathParts.length - 2];
  const title = pathParts[pathParts.length - 1];
  try {
    if (!session) {
      return NextResponse.json({ message: 'You need to be authenticated with a Google account.' }, { status: 401 })
    }
    if (!schoolName || !title) {
      return new Response("The 'schoolName' or 'title' parameter is missing from the URL", {
        status: 400,
      });
    }

    const certificateQuery = query(
      collection(firestoreDB, "certificates"),
      where("schoolName", "==", schoolName),
      where("title", "==", title)
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
    // Log the error for debugging purposes. This could be due to network issues, Firestore permission issues, or invalid document references.
    console.error("Error during certificate deletion:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
