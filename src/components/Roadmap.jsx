/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Roadmap() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Hachiware
          <br /> awesome <span class="underline decoration-dblue">Roadmap</span>
        </h1>

        <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
        As we navigate this roadmap, our north star is the unwavering support and active participation of our community. Together, we're not just charting a course; we're making history with Hachiware.
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div class="p-8 space-y-3 border-2 border-dblue dark:border-blue-300 rounded-xl">
            <span class="inline-block text-dblue dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </span>

            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              Phase 1: Meme
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
            Welcome to the exciting world of Hachiware, the newest and most innovative addition to the meme token market! As we unveil Phase Number One of Hachiware, we're not just introducing a new token; we're launching a revolution in digital currency, blending humor, community spirit, and serious investment potential. 
            </p>

            {/* <a
              href="#"
              class="inline-flex p-2 text-dblue capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-dblue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a> */}
          </div>

          <div class="p-8 space-y-3 border-2 border-dblue dark:border-blue-300 rounded-xl">
            <span class="inline-block text-dblue dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>

            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              Phase 2: Hold
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
            In the dynamic world of cryptocurrencies, "HODL" has become more than just a misspelled word for "hold". It's a philosophy, a strategy, and a testament to the unwavering belief in a project's potential. With Hachiware, holding is not just waiting; it's strategically participating in the growth and stability of a token destined for greatness. 
            </p>

            {/* <a
              href="#"
              class="inline-flex p-2 text-dblue capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-dblue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a> */}
          </div>

          <div class="p-8 space-y-3 border-2 border-dblue dark:border-blue-300 rounded-xl">
            <span class="inline-block text-dblue dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>

            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
              Phase 3: Moon
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              
 "Mooning" in the crypto world signifies a period of rapid growth and substantial increase in value. As Hachiware enters this exciting phase, we're gearing up for an explosive trajectory, backed by robust technology, unwavering community support, and a vision that transcends the ordinary.
            </p>

            {/* <a
              href="#"
              class="inline-flex p-2 text-dblue capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-dblue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
