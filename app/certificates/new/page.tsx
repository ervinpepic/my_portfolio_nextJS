import Form from "../_components/_form/Form";

const page = () => {
  return (
    <div className="container mx-auto lg:px-24 px-4">
      <div className="flex flex-col mt-4 md:mt-10 mb-16">
        <div className="mt-16 lg:mt-20">
          <h1 className="text-center text-3xl font-semibold tracking-wide text-gray-700 dark:text-slate-200">
            Create a new certificate
          </h1>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default page;
