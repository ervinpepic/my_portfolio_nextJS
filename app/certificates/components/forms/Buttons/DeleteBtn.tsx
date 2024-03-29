import { CiTrash } from "react-icons/ci";

const btnStyle = "w-5 h-5 border-2 border-dashed rounded-full animate-spin border-red-700"

const DeleteBtn = ({
  loading,
  deleteFunction,
}: {
  loading: boolean;
  deleteFunction: () => void;
}) => {
  return (
    <button
      onClick={deleteFunction}
      className="text-red-700 hover:text-red-300 mx-2 mt-2"
    >
      {loading ? (
        <div className={btnStyle}></div>
      ) : (
        <CiTrash />
      )}
    </button>
  );
};

export default DeleteBtn;
