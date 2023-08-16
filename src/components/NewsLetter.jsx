import React from "react";

export const NewsLetter = () => {
  // const cssClass = 'md:text-5xl sm:text-4xl text-xl'
  return (
    <>
      <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Whan tips & tricks to optimize your flow?
            </h1>
            <p>Sing up to our newsletter and stay up to date.</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black "
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-[#00df9a] hover:bg-sky-700 hover:text-white w-[200px] ease-in-out duration-200 rounded-md ml-4 my-6 px-6 py-3 text-black font-bold">
                Notify Me
              </button>
            </div>
            <p>
              We care bout the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
