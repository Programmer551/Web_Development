// "use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const SingleDrink = async ({ params }) => {
  const id = params.drinkId;
  const res = await fetch(`${url}${id}`);

  const data = await res.json();

  return (
    <>
      <Link href='/drinks'>
        <button className='btn btn-primary'>Back to Drinks</button>
      </Link>
      <Image
        src={data.drinks[0].strDrinkThumb}
        alt='Drink'
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg m-8'
        priority
      />
      <h1 className='cursor-pointer m-10 hover:bg-cyan-600 duration-1000 p-5 transition rounded-md'>
        {data.drinks[0].strDrink}
      </h1>
    </>
  );
};

export default SingleDrink;
