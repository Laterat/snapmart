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
      <div>
        <div className="relative w-full h-auto aspect-[380/255] ">
          <Image src={images[0]} alt={title} fill className="rounded-2xl z-0" />

          {Number(discountPercentage) > 0 && (
            <div className="absolute top-5  rounded-bl-none bg-[#cd310f] text-[#EDEDED] text-xl font-bold px-2 py-2 rounded-full shadow-2xl z-20 ">
              {discountPercentage}% off
            </div>
          )}
        </div>
        <p>{title}</p>
        <div className="flex justify-between">
          <p className="text-xl">${price}</p>
          <p className="flex items-center space-x-2 justify-center">
            <FaStar className="text-yellow-500 text-xl" />
            <span className="text-xl">{rating}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
