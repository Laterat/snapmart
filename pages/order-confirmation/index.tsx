import Pill from "@/components/common/Pill";
import { useRouter } from "next/router";

export default function OrderConfirmation() {
  const router = useRouter();
  const { orderId } = router.query;

  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-3xl font-bold text-green-600">
        ✅ Order Successful!
      </h1>
      <p className="mt-3 text-lg">
        Your order <span className="font-bold">#{orderId}</span> has been
        placed.
      </p>
      <Pill
        onclick={() => router.push("/product")}
        customCSS="mt-5 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        label="Continue Shopping"
      />
    </section>
  );
}
