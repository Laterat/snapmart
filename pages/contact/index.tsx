import Pill from "@/components/common/Pill";

export default function ContactPage() {
  return (
    <section className="mt-2 mx-5 md:mx-20">
      <div className="flex flex-col mb-5">
        <h1 className="font-semibold mb-2 text-lg md:text-xl lg:text-2xl">
          About US
        </h1>
        <div className="shadow bg-gray-100 px-6 py-4 rounded-2xl space-y-4">
          <p className="text-justify md:text-lg ">
            Welcome to SnapMart — your go-to destination for discovering quality
            products at unbeatable prices. Whether you're looking for the latest
            gadgets, fashion essentials, or everyday must-haves, we've got you
            covered. At SnapMart, we believe shopping should be simple, fast,
            and enjoyable. That’s why we’ve built a sleek, responsive online
            store using modern tools like DummyJSON to bring you a seamless demo
            shopping experience.
          </p>
          <p className="text-justify md:text-lg ">
            While SnapMart is a demo project, it's designed with real-world
            features — from dynamic product listings to smart filters and
            user-friendly design — helping you imagine what a full e-commerce
            experience would feel like. Built for developers, learners, and
            design enthusiasts, SnapMart showcases what’s possible with tools
            like Next.js, Tailwind CSS, and API integrations. Thank you for
            exploring SnapMart — where great design meets practical learning.
          </p>
          <p className="text-justify md:text-lg ">
            Thank you for exploring SnapMart — where great design meets
            practical learning.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="font-semibold mb-4 text-lg md:text-xl lg:text-2xl">
          Contact US
        </h1>

        <div className="flex flex-col md:flex-row mx-5 md:mx-15">
          <div className="space-y-4">
            <div className="flex space-x-7 items-center">
              <label for="name" className="font-semibold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border rounded-md mx-auto  px-3 py-1"
              />
            </div>
            <div className="flex space-x-7 items-center">
              <label for="email" className="font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border rounded-md  mx-auto px-3 py-1"
              />
            </div>
            <div className="flex space-x-7 items-center">
              <label for="subject" className="font-semibold">Subject:
              </label>
              <input
                type="text"
                id="suject"
                placeholder="Enter your subject"
                className="border rounded-md mx-auto px-3 py-1"
              />
            </div>
          </div>
          
          <div>
            <textarea
              placeholder="Enter Your Message"
              className="border h-[100%] rounded-md px-3 py-2"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center">
          <Pill
            label="Submit"
            onclick={() => {
              alert("Submit");
            }}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p>Alternatively, you can reach us via email or phone</p>
        <div className="flex flex-col md:flex-row md:px-10 md:space-x-6"></div>
      </div>
    </section>
  );
}
