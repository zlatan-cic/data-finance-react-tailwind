import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold p-2">
            Growing with data analytics
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow with data.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Fast, flexible finacing for
            </p>
            <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            ></Typed>
          </div>
            <p className="md:text-2xl text-xl font-bold text-gray-600 mt-1">Monitoring your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
            <button className="bg-[#00df9a] hover:bg-sky-700 hover:text-white w-[200px] ease-in-out duration-200 rounded-md my-6 mx-auto py-3 text-black font-bold">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
