import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { clearCart } from "@/store/slices/cartSlice";

export default function CheckOutPage() {
  const { items } = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    payment: "Credit Card",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      dispatch(clearCart());
      router.push(
        "/order-confirmation?orderId=" + Math.floor(Math.random() * 1000000)
      );
    }, 1500);
  };

  return (
    <section className="mx-5 md:mx-20 mt-5">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-5">Checkout</h1>

      {items.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-5">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-3"
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={item.thumblain}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="flex justify-between mt-4 text-lg font-bold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-5">
            <h2 className="text-xl font-bold mb-4">Shipping & Payment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Payment Method
                </label>
                <select
                  name="payment"
                  value={formData.payment}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option>Credit Card</option>
                  <option>PayPal</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 w-full "
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
