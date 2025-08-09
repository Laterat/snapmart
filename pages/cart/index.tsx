import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, removeFromCart, clearCart } from "@/store/slices/cartSlice";
import Pill from "@/components/common/Pill";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  return (
    <section>
      <h1>Cart</h1>
      {items.map((item)=>(
        <div>  <p>{items[0].id}</p>;</div>
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
