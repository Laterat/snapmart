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
          <Image src={images} alt={title} fill className="rounded-2xl z-0" />

          {Number(discountPercentage) > 0 && (
            <div className="absolute top-5 rounded-bl-none bg-[#15a17c] text-[#EDEDED] text-xl font-bold px-2 py-2 rounded-full shadow-2xl z-20 ">
              {discountPercentage}% off
            </div>
          )}
        </div>
        <p>{title}</p>
        <div>
          <p>{price}</p>
          <p>
            <FaStar className="text-yellow-500" />
            <span>{rating}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
