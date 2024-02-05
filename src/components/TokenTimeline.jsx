import React from "react";

export default function TokenTimeline() {
  return (
    <section className=" text-gray-100 md:py-20 py-6 px-6 md:px-16">
      <div className="container md:px-4 py-12 mx-auto bg-lblue text-black rounded-lg">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-dblue">
              <h3 className="text-3xl font-semibold">How to Buy</h3>
              {/* <span className="text-sm font-bold tracki uppercase text-gray-700">
                Vestibulum diam nunc
              </span> */}
            </div>
          </div>
          <div className="relative col-span-12 md:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-dblue">
                <h3 className="text-xl font-semibold tracki">
                  1. Create a Wallet
                </h3>
                {/* <time className="text-xs tracki uppercase text-gray-700">
                  Put some text here!
                </time> */}
                <p className="mt-3">
                  Download Phantom or your wallet of choice from the app store
                  or google play store for free. Desktop users, download the
                  google chrome extension by going to Phantom.app.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-dblue">
                <h3 className="text-xl font-semibold tracki">
                  2. Get Some $SOL
                </h3>
                {/* <time className="text-xs tracki uppercase text-gray-700">
                  Put some text here!
                </time> */}
                <p className="mt-3">
                  Have $SOL in your wallet to switch to $HACHIWARE. If you don’t
                  have any $SOL, you can buy directly on Phantom, transfer from
                  another wallet, or buy on another exchange and send it to your
                  wallet.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-dblue">
                <h3 className="text-xl font-semibold tracki">
                  3. Go to Orca.so
                </h3>
                {/* <time className="text-xs tracki uppercase text-gray-700">
                  Put some text here!
                </time> */}
                <p className="mt-3">
                  Connect to Raydium. Go to Orca.so in google chrome or on the
                  browser inside your Phantom app. Connect your wallet. Paste
                  the $HACHIWARE token address into Orca, select $HACHIWARE, and
                  confirm. When Phantom prompts you for a wallet signature,
                  sign.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-dblue">
                <h3 className="text-xl font-semibold tracki">
                  4. Switch SOL For $HACHIWARE
                </h3>
                {/* <time className="text-xs tracki uppercase text-gray-700">
                  Put some text here!
                </time> */}
                <p className="mt-3">
                  Switch SOL for $HACHIWARE. We have ZERO taxes so you don’t
                  need to worry about buying with a specific slippage, although
                  you may need to use slippage during times of market
                  volatility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
