"use client"

import React from "react";
import { products } from "./_data/data";
import CarouselItem from './_components/carouselItem';

export default function Home() {


  return (
    <main className="min-h-screen">

      {/* Menu */}
      <div className="border-b border-gray-200 mx-auto pt-5 pb-5">
        <ul className="flex gap-3 w-[90%] mx-auto">
          <li className="underline underline-offset-3">Home</li>
          <li>Hot Deals</li>
          <li>Categories</li>
        </ul>
      </div>


      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5 mx-10 mt-5">

        {
          products.slice(0, 3).map((item, key) => {
            return (
              <div className="card bg-base-100 w-90 shadow-sm" key={key}>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.url}
                    alt={item.title}
                    className="rounded-xl object-cover" />
                </figure>
              </div>)

          })
        }

      </div>
      {/* Cards END */}


      {/* Products */}
      <div className=" mx-auto mt-5  pr-5 pl-5 max-w-300 ">

        <h1 className="text-3xl text-center pt-5 pb-5 font-bold">Products</h1>

        <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4 w-full">

          {/* Carousel Item */}

          {
            products.map((item) => {
              return <CarouselItem key={item.id} item={item} />
            })
          }


        </div>

      </div>
      {/* Products END */}


      <div className="border-2 border-gray-300 shadow-gray-300 shadow-md rounded-2xl mx-5 md:mx-auto mt-5 mb-5 h-40 max-w-300  bg-gray-950 content-center">

        <h1 className="md:text-7xl text-3xl font-bold text-center font-serif">Welcome Back </h1>

      </div>

    </main>
  );
}
