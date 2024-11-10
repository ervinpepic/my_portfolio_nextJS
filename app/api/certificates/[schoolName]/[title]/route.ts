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
  const { pathname } = request.nextUrl;
  const pathParts = pathname.split('/');
  const schoolName = pathParts[pathParts.length - 2];
  const title = pathParts[pathParts.length - 1];
  try {
    if (!session) {
      return NextResponse.json({ message: 'You need to be authenticated with Google acc.' }, { status: 401 })
    }
    if (!schoolName || !title) {
      return new Response("Missing 'schoolName' or 'title' parameter", {
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
    console.error("Error during certificate deletion:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
