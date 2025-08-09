import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, removeFromCart, clearCart } from "@/store/slices/cartSlice";
import Pill from "@/components/common/Pill";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  let itemCount = 1;
  return (
    <section className="mt-5 md:mx-20">
      <h1 className="font-semibold mb-4 text-lg md:text-xl lg:text-2xl">Shopping Cart</h1>
      <div className="grid grid-cols-6">
        <p>S.No</p>
        <p>Product</p>
        <p>Unit Price</p>
        <p>Quantity</p>
        <p>Total Price</p>
        <p>Remove Item</p>
      </div>
      {items.map((item) => (
        <div className="grid grid-cols-6">
          <p>{itemCount++}</p>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
           <p>{item.quantity}</p>
          <Pill
            label="remove"
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
