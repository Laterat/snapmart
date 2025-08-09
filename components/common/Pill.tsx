import { pill } from "@/interfaces";

const Pill: React.FC<pill> = ({ label, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="mt-4 p-2 bg-gray-200 text-xl rounded-xl px-2 py-2 hover:bg-gray-300 active:bg-gray-400"
    >
      {label} 
    </button>
  );
};

export default Pill;
