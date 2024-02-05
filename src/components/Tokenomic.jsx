import React from "react";

function Tokenomic() {
  return (
    <div className="container px-6 py-6 md:py-20 mx-auto">
      <section className=" container px-4 md:px-12 py-12 mx-auto bg-white dark:bg-gray-900 rounded-lg sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-9 text-gray-700 dark:text-gray-200 sm:text-4xl sm:leading-10">
            Tokenomics
          </h2>
          <p className="mt-3 text-base leading-7 text-gray-700 dark:text-gray-200 sm:mt-4">
            Tokenomics, derived from the words 'token' and 'economics,' is the
            study of the supply, demand, distribution, and valuation of
            cryptocurrencies.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-8 text-gray-600 dark:text-gray-200 pt-8">
          <div className="text-center sm:text-left ">
            <p className="text-xl font-extrabold leading-none">
              100,000,000,000
            </p>
            <p className="mt-2 text-base font-medium leading-6">Total Supply</p>
          </div>

          <div className="text-center mt-6 sm:mt-0 ">
            <p className="text-xl font-extrabold leading-none">40,000,000</p>
            <p className="mt-2 text-base font-medium leading-6">Locked</p>
          </div>

          <div className="text-center mt-6 sm:mt-0">
            <p className="text-xl font-extrabold leading-none">600,0000,000</p>
            <p className="mt-2 text-base font-medium leading-6">6% Marketing</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tokenomic;
