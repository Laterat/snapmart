import { ProductProps } from "@/interfaces";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import user from "../public/assets/user.png";

const ProductDetail: React.FC<{ product: ProductProps }> = ({ product }) => {
  return (
    <section className="flex  flex-col mr-15  min-w-full px-10 mt-5">
      <div className="flex w-full justify-center ">
        <div className="shadow-md rounded-2xl flex flex-col lg:w-[70%] md:grid md:grid-cols-2 md:gap-6">
          <div className="relative shadow-md rounded-2xl w-full h-auto aspect-[150/100] mb-5 ">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="rounded-2xl bg-gray-200 "
            />
          </div>
          <div>
            <h2 className="flex text-xl md:text-2xl font-semibold">
              {product.title}
            </h2>
            <p className="text-xl">
              <span className="font-semibold mr-3">Brand:</span>
              {product.brand}
            </p>
            <p className="text-xl">
              <span className="font-semibold mr-3">Price:</span> $
              {product.price}
            </p>
            <p className="text-xl">
              <span className="font-semibold mr-3">Discount: </span>
              <span className="text-white bg-red-500 px-3 py-1  rounded-md">
                {product.discountPercentage}% Off
              </span>
            </p>
            <p className="text-xl flex items-center">
              <span className="font-semibold mr-3">rating:</span>
              <FaStar className="text-yellow-400 mr-1 " />
              {product.rating}
            </p>
            <div className="flex flex-row gap-4">
              <p className="text-xl">
                <span className="font-semibold">Description:</span>
              </p>
              <p className="md:text-xl">{product.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col w-full md:w-[70%] px-8 shadow-md mt-5 p-4">
          <div className="grid grid-cols-2 py-2 border-b">
            <p className="md:text-xl font-semibold">Shipping</p>
            <p className="text-right">{product.shippingInformation}</p>
          </div>

          <div className="grid grid-cols-2 py-2 border-b">
            <p className="md:text-xl font-semibold">Availability</p>
            <p className="text-right">{product.availabilityStatus}</p>
          </div>

          <div className="grid grid-cols-2 py-2 border-b">
            <p className="md:text-xl font-semibold">Warranty Info</p>
            <p className="text-right">{product.warrantyInformation}</p>
          </div>

          <div className="grid grid-cols-2 py-2">
            <p className="md:text-xl font-semibold">Return Policy</p>
            <p className="text-right">{product.returnPolicy}</p>
          </div>
        </div>
      </div>

      <div className="w-[70%]">
        <h1 className="text-xl md:2xl font-semibold">reviews</h1>
        {product.reviews.map((review) => (
          <div className="flex flex-col gap-4 py-4 border-b">
            <div className="flex flex-row items-center gap-4">
              <Image
                src={user}
                alt="user Logo"
                width={50}
                height={30}
                className=""
              />
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{review.reviewerName}</p>
                <p className="text-lg ">{review.reviewerEmail}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col-2 gap-6">
                <p className="text-xl flex">
                  <FaStar className="text-yellow-400 mr-1 " />
                  {product.rating}
                </p>
                <div>
                  <p className="text-lg">
                    {new Date(review.date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p>
                  <p className="text-lg">{review.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProductDetail;
