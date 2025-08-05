import Image from "next/image";
import React from "react";
import email from "../../public/assets/email.png";
import telegram from "../../public/assets/telegram.png";
import instagram from "../../public/assets/instagram.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#625C5C] ">
      <div className="bg-[#9AA98B] h-6"></div>
      <div className="flex  justify-between mx-15 mt-10">
        <div>
          <h1 className="font-Tauri text-white text-3xl">SnapMart</h1>
          <p>SnapMart is a demo e-commerce platform powered by </p>
          <p>DummyJSON API, showcasing a modern and responsive</p>
          <p>shopping experience.</p>
        </div>
        <div className="flex flex-col space-y-4 justify-center items-center">
          <h1 className="text-2xl">Categories</h1>
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2">
              <button>Beauty</button>
              <button>Fragnance</button>
              <button>Furniture</button>
              <button>Groceries</button>
            </div>
            <div className="flex flex-col space-y-2">
              <button>SmartPhones</button>
              <button>Laptops</button>
              <button>Vehicle</button>
              <button>Watches</button>
            </div>
          </div>
          <button className="bg-white rounded-3xl py-2 px-3 ">more</button>
        </div>
        <div>
          <div className="flex justify-between space-x-10">
            <div>
              <h1 className="text-2xl">Company</h1>
              <button>About Us</button>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl">Help</h1>
              <button>Contact us</button>
              <button>Returns</button>
            </div>
          </div>
          <div className=" mt-4 flex items-center justify-center space-x-4">
            <Image src={instagram} alt="Snapmart Logo" width={50} height={30} />
            <Image src={telegram} alt="Snapmart Logo" width={50} height={30} />
            <Image src={email} alt="Snapmart Logo" width={50} height={30} />
          </div>
        </div>
      </div>

      <hr className="border-t border-t-white mx-10 mt-5 mb-4" />

      <div className="flex justify-between mx-20 ">
        <div>&copy; 2025 SnapMart. All right Reserved.</div>
        <div className="flex  space-x-15 mb-5">
          <p>Terms of service</p>
          <p>Policy service</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
