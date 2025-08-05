import { ProductCardProps } from "@/interfaces";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  discountPercentage,
  rating,
  images,
}) => {
  return (
    <section>
      <div className="shadow-md rounded-2xl transition duration-300 ease-in-out transform hover:shadow-2xl  hover:scale-105 hover:-translate-y-1">
        <div className="relative w-full h-auto aspect-[380/255] mb-5 ">
          <Image
            src={images[0]}
            alt={title}
            fill
            
            className="rounded-2xl bg-gray-200 "
          />

          {Number(discountPercentage) > 0 && (
            <div className="absolute top-4  rounded-bl-none bg-[#cd310f] text-[#EDEDED]  px-2 py-1 rounded-full shadow-2xl ">
              {discountPercentage}% off
            </div>
          )}
        </div>
        <p className="px-4 text-lg font-semibold">{title}</p>
        <div className="flex justify-between px-5">
          <p className="text-xl">${price}</p>
          <p className="flex items-center space-x-2 justify-center mb-5">
            <FaStar className="text-yellow-500 text-xl" />
            <span className="text-xl">{rating}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
