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
        {/* <a
          href="#"
          class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Fit On
        </a> */}

        <div class="mx-auto mt-5 w-screen max-w-screen-md py-20 leading-6">
          <form class="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg">
            <svg
              class="absolute left-2 block h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8" class=""></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
            </svg>
            <input
              type="name"
              name="search"
              class="h-14 w-full text-black rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
              placeholder="Lets Shop..."
            />
            <button
              type="submit"
              class="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
