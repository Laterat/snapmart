import { pill } from "@/interfaces";

const Pill: React.FC<pill> = ({ label, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="mt-4 p-2 bg-gray-200 text-xl rounded-xl px-2 py-2"
    >
      {label}
    </button>
  );
};

export default Pill;
