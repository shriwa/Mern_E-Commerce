import React from "react";
import "./Hero.css";
import { FaHandSpock } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import hero_image from "../Components/Assets/hero_image_2.png";

const Hero = () => {
  return (
    <div class="relative bg-gradient-to-r from-red-600 to-cyan-600 h-screen text-white overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://media.gq-magazine.co.uk/photos/60d99978798ce10d68d9c90c/16:9/w_1920,c_limit/DIOR2806_HP.jpg"
          alt="Background Image"
          class="object-cover object-center w-full h-full"
        />
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 class="text-5xl font-bold leading-tight mb-4">
          Welcome to SnapShop
        </h1>
        <p class="text-lg text-gray-300 mb-8">
          "Discover your style with SnapShop – where fashion meets convenience."
        </p>
        <a
          href="#"
          class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Fit On
        </a>
      </div>
    </div>
  );
};

export default Hero;
