import { ProductProps } from "@/interfaces";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import user from "../public/assets/user.png";
import Pill from "@/components/common/Pill";
import { addToCart } from "@/store/slices/cartSlice";
import { useDispatch, UseDispatch } from "react-redux";

const ProductDetail: React.FC<{ product: ProductProps }> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <section className="flex  flex-col mr-15  min-w-full px-10 mt-5">
      <div className="flex w-full justify-center ">
        <div className="shadow-md rounded-2xl flex flex-col lg:w-[70%] md:grid md:grid-cols-2 md:gap-6">
          <div className="relative md:flex md:flex-col shadow-md rounded-2xl w-full md:h-[70%] h-auto aspect-[150/100] mb-5 ">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="rounded-2xl bg-gray-200 "
            />

            <div className="hidden absolute top-[110%] left-0  right-0 md:flex justify-around mb-2">
              <Pill
                onclick={() => {
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      thumblain: product.thumbnail,
                      quantity: 1,
                    })
                  );
                }}
                label="Add to cart"
              />
              <Pill onclick={() => {}} label="Buy Now" />
            </div>
          </div>
          <div className="px-2">
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
            <div className="flex justify-around mb-2 md:hidden ">
              <Pill
                onclick={() => {
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      thumblain: product.thumbnail,
                      quantity: 1,
                    })
                  );
                }}
                label="Add to cart"
              />
              <Pill onclick={() => {}} label="Buy Now" />
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

      <div className="flex justify-center">
        <div className="w-[70%] mt-6 shadow-md p-7  mb-10">
          <h1 className="text-xl md:2xl lg:3xl font-semibold">Reviews</h1>
          {product.reviews.map((review) => (
            <div className="flex flex-col gap-4 py-4 border-b md:mx-10 lg:mx-20 ">
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
                  <p>{review.reviewerEmail}</p>
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
      </div>
    </section>
  );
};
export default ProductDetail;
