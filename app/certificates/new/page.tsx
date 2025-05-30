import { authOptions } from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";
import { btnClassNames } from "../components/forms/styles/FormSyles";
import CreateForm from "../components/forms/CreateForm";
import Link from "next/link";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="container mx-auto lg:px-24 px-4 h-dvh">
      <div className="flex flex-col mt-4 md:mt-10">
        <div className="mt-16 lg:mt-20">
          {session && (
            <h1 className="text-center text-3xl font-thin tracking-wide text-gray-700 dark:text-slate-200 mb-6">
              Logged in as {session.user?.name}
              <Link
                className={`mx-4 ${btnClassNames.btnEnabled}`}
                href="/api/auth/signout"
              >
                LogOut
              </Link>
            </h1>
          )}
          <h1 className="text-center md:text-start text-2xl font-semibold tracking-wide text-gray-700 dark:text-slate-200">
            Create a new certificate
          </h1>
          <CreateForm />
        </div>
      </div>
    </div>
  );
};

export default page;
