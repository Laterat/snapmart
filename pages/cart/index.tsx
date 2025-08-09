import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, removeFromCart, clearCart } from "@/store/slices/cartSlice";
import Pill from "@/components/common/Pill";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  return (
    <section className="mt-5 md:mx-20">
      <h1>Cart</h1>
         <div className="grid grid-cols-5">
          <p>S/p>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <Pill
            label="remove"
            onclick={() => dispatch(removeFromCart(item.id))}
          />
        </div>
      {items.map((item) => (
        <div className="grid grid-cols-5">
          <p>{items[0].id}</p>
          <p>{item.title}</p>
          <p>{item.price}</p>
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
