import Pill from "@/components/common/Pill";
import Image from "next/image";
import email from "../../public/assets/email.png";
import telegram from "../../public/assets/telegram.png";
import instagram from "../../public/assets/instagram.png";
import phone from "../../public/assets/phone.png";

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

      <div className="flex flex-col mt-6">
        <h1 className="font-semibold mb-4 text-lg md:text-xl lg:text-2xl">
          Contact US
        </h1>

        <div className="flex flex-col md:flex-row gap-6 mx-5 md:mx-15">
          <div className="space-y-4 flex-1">
            <div className="flex gap-4 items-center">
              <label htmlFor="name" className="font-semibold w-22">
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border rounded-md   px-3 py-1 w-[70%] "
              />
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="email" className="font-semibold w-22 ">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border rounded-md   px-3 py-1 w-[70%]"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="subject" className="font-semibold w-22 ">
                Subject:
              </label>
              <input
                type="text"
                id="suject"
                placeholder="Enter your subject"
                className="border rounded-md  px-3 py-1 w-[70%] "
              />
            </div>
          </div>

          <div className="flex justify-center md:flex-1">
            <textarea
              placeholder="Enter Your Message"
              className="border  rounded-md px-3 py-2 w-[80%] md:w-full h-full min-h-[150px]"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <Pill
            label="Submit"
            customCSS="bg-[#B5ADAD] px-3 py-1 rounded-3xl hover:bg-[#B6ADAD]"
            onclick={() => {
              alert("Submit");
            }}
          />
        </div>
      </div>

      <div className="flex flex-col my-6 mx-[10%]">
        <p>Alternatively, you can reach us via email or phone</p>
        <div className="flex flex-col md:flex-row md:gap-[30%] md:px-10 md:space-x-6">
          <div className=" mt-4 flex items-center justify-center space-x-4">
            <Image src={phone} alt="Phone Logo" width={40} height={30} />
            <p>+251 900000000</p>
          </div>
          <div className=" mt-4 flex items-center justify-center space-x-4">
            <Image
              src={instagram}
              alt="instagram Logo"
              width={50}
              height={30}
            />
            <Image src={telegram} alt="telegram Logo" width={50} height={30} />
            <Image src={email} alt="email Logo" width={50} height={30} />
          </div>
        </div>
      </div>
    </section>
  );
}
