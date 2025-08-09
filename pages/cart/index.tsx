import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "@/store/slices/cartSlice";
import Link from "next/link";
import Pill from "@/components/common/Pill";
import Image from "next/image";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  let itemCount = 1;

  const formatPrice = function (price: number) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      // maximumSignificantDigits: 2,
    });
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="mt-2 mx-5 md:mx-20">
      <h1 className="font-semibold mb-4 text-lg md:text-xl lg:text-2xl">
        Shopping Cart
      </h1>
      <div className=" text-sm md:text-base grid grid-cols-6 bg-[#F0F0F0] border-b py-2 mb-2 px-2 rounded-md font-semibold">
        <p className="text-center">S.No</p>
        <p className="text-center">Product</p>
        <p className="text-center">Unit Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-center">Total Price</p>
        <p className="text-center">Delete Option</p>
      </div>
      {items.map((item) => (
        <div className="grid grid-cols-6 px-2 py-2  rounded-md shadow border-b bg-[#F0F0F0] text-sm md:text-base">
          <p className="text-center">{itemCount++}</p>
          <div className="flex items-center space-x-2">
            <Image
              src={item.thumblain}
              width={50}
              height={50}
              alt={item.title}
            />
            <p>{item.title}</p>
          </div>
          <p className="text-center">${item.price}</p>
          <div className="flex space-x-2 items-center justify-center">
            <Pill
              label="-"
              customCSS="text-gray-800 hover:text-red-900"
              onclick={() => dispatch(decrementQuantity(item.id))}
            />
            <p>{item.quantity}</p>
            <Pill
              label="+"
              customCSS="text-gray-800 hover:text-red-900"
              onclick={() => dispatch(incrementQuantity(item.id))}
            />
          </div>
          <p className="text-center">
            {formatPrice(item.quantity * item.price)}
          </p>
          <Pill
            label="Remove"
            customCSS="text-gray-800 hover:text-red-900"
            onclick={() => dispatch(removeFromCart(item.id))}
          />
        </div>
      ))}

      <div className="flex shadow rounded-md p-3 justify-between bg-[#F0F0F0] mt-5">
        <div className="flex items-center">
          <Pill
            label="Clear Cart"
            onclick={() => dispatch(clearCart())}
            customCSS="border border-red-400 px-4 py-2 text-xl text-red-700 rounded-md active:bg-gray-100 cursor-pointer"
          />
        </div>
        <div className="flex flex-col space-y-2 ">
          <p className="flex justify-center">
            <span>Total:{formatPrice(totalPrice)}</span>
          </p>
          <Pill
            customCSS="cursor-pointer bg-gray-200 active:bg-gray-300 px-4 py-2 text-xl text-red-700 rounded-md "
            label="Chech Out"
            onclick={() => {}}
          />
        </div>
      </div>
      <div className="flex justify-center items-center my-5  ">
        <Link href="/product">
          <Pill onclick={() => {}} label="Back to Shopping" />
        </Link>
      </div>
    </section>
  );
}
