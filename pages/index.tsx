import Image from "next/image";
import Hero from "../public/assets/hero.png";
import TopRatedProducts from "@/components/TopRatedProducts";

export default function Home() {
  return (
    <section className="py-4 px-4">
      <div className="flex justify-center mx-10 rounded-2xl shadow-2xl p-4">
        <Image
          src={Hero}
          alt="Snapmart Logo"
          className="w-full h-200 object-cover rounded-2xl"
          priority
        />
        <div className="absolute inset-0 flex flex-col  justify-center text-black px-4 space-y-4 ml-20 mt-30">
          <p className="text-4xl md:text-5xl font-extrabold ">
            Discover Quality
          </p>
          <p className="text-4xl md:text-5xl font-extrabold ">
            Products at the
          </p>
          <p className="text-4xl md:text-5xl font-extrabold ">Best Prices</p>
          <p className="text-base font-semibold mt-5">
            Top -rated smart phonss, Laptops, beauty and more
          </p>
          <button className="bg-black text-white px-5 py-2 rounded-2xl w-30 mt-6 ml-10">
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <TopRatedProducts />
      </div>
    </section>
  );
}
