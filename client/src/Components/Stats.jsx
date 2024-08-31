import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="w-screen bg-white sm:px-4 xl:px-12">
        <div className="z-10 mx-auto w-full px-6 py-12 sm:px-8 sm:py-16 lg:px-10 xl:px-16">
          <div className="mb-12">
            <div className="lg:flex-no-wrap -mx-3 flex flex-row flex-wrap items-end">
              <div className="mr-auto w-full flex-grow px-3">
                <h3 className="text-3xl font-bold text-indigo-600 sm:text-5xl">
                  Valley's Go to Marketing Studio
                </h3>
              </div>
            </div>
          </div>
          <div className="-mx-2 flex flex-wrap font-bold">
            <div className="mb-4 w-full px-2 lg:w-3/5">
              <div className="h-full w-full bg-blue-900 p-6">
                <div className="z-10 flex flex-col justify-between">
                  <h1 className="text-4xl text-white sm:text-8xl">#1</h1>
                  <h6 className="mt-12 text-xl text-white sm:text-3xl">
                    Marketing Studio in the Bay Area.
                  </h6>
                </div>
              </div>
            </div>
            <div className="mb-4 w-full px-2 lg:w-2/5">
              <div className="h-full w-full bg-yellow-400 p-6">
                <div className="z-10 flex flex-col justify-between">
                  <h1 className="text-4xl text-blue-900 sm:text-8xl">FDA</h1>
                  <h6 className="mt-12 text-xl text-blue-900 sm:text-3xl">
                    Approved by FDA and 25 other organizations.
                  </h6>
                </div>
              </div>
            </div>
            <div className="mb-4 w-full px-2 lg:w-1/3">
              <div className="h-full w-full bg-indigo-600 p-6">
                <div
                  className="absolute z-0 opacity-0 hover:opacity-50"
                  style={{ mixBlendMode: "multiply" }}
                ></div>
                <div className="z-10 flex flex-col justify-between">
                  <h1 className="text-4xl text-white sm:text-8xl">70+</h1>
                  <h6 className="mt-12 text-xl text-white sm:text-3xl">
                    Awards
                  </h6>
                </div>
              </div>
            </div>
            <div className="mb-4 w-full px-2 lg:w-1/3">
              <div className="h-full w-full bg-blue-400 p-6">
                <div className="z-10 flex flex-col justify-between">
                  <h1 className="text-4xl text-white sm:text-8xl">12k</h1>
                  <h6 className="mt-12 text-xl text-white sm:text-3xl">
                    New Users Every Month
                  </h6>
                </div>
              </div>
            </div>
            <div className="mb-4 w-full px-2 lg:w-1/3">
              <div className="h-full w-full bg-red-200 p-6">
                <div className="z-10 flex flex-col justify-between">
                  <h1 className="text-4xl text-blue-900 sm:text-8xl">23</h1>
                  <h6 className="mt-12 text-xl text-blue-900 sm:text-3xl">
                    Fortune 500 Clients
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
