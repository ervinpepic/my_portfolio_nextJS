import CreateForm from "../_components/_form/CreteForm";

const page = () => {
  return (
    <div className="container mx-auto lg:px-24 px-4">
      <div className="flex flex-col mt-4 md:mt-10 mb-16">
        <div className="mt-16 lg:mt-20">
          <h1 className="text-center text-3xl font-semibold tracking-wide text-gray-700 dark:text-slate-200">
            Create a new certificate
          </h1>
          <CreateForm />
        </div>
      </div>
    </div>
  );
};

export default page;
