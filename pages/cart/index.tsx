import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "@/store/slices/cartSlice";
import Pill from "@/components/common/Pill";

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

  return (
    <section className="mt-5 md:mx-20">
      <h1 className="font-semibold mb-4 text-lg md:text-xl lg:text-2xl">
        Shopping Cart
      </h1>
      <div className="grid grid-cols-6">
        <p>S.No</p>
        <p>Product</p>
        <p>Unit Price</p>
        <p>Quantity</p>
        <p>Total Price</p>
        <p>Delete Option</p>
      </div>
      {items.map((item) => (
        <div className="grid grid-cols-6">
          <p>{itemCount++}</p>
          <p>{item.title}</p>
          <p>${item.price}</p>
          <div className="flex space-x-2 items-center justify-center">
            <Pill
              label="-"
              customCSS="text-gray-800 hover:text-red-900"
              onclick={() => dispatch(decrementquantity(item.id))}
            />
            <p>{item.quantity}</p>
            <Pill
              label="+"
              customCSS="text-gray-800 hover:text-red-900"
              onclick={() => dispatch(incrementQuantity(item.id))}
            />
          </div>
          <p>{formatPrice(item.quantity * item.price)}</p>
          <Pill
            label="Remove"
            customCSS="text-gray-800 hover:text-red-900"
            onclick={() => dispatch(removeFromCart(item.id))}
          />
        </div>
      ))}

      <div>
        <div>
          <Pill label="Clear Cart" onclick={() => dispatch(clearCart())} />
        </div>
        <div>
          <div>
            <p>Total</p>
          </div>
          <div>
            <Pill label="Chech Out" onclick={() => {}} />
          </div>
        </div>
      </div>
    </section>
  );
}
