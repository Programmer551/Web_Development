import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
import Image from "next/image";
const Drinks = async () => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data.drinks);

  return (
    <div>
      {data.drinks.map((drink) => {
        return (
          <Link href={`/drinks/${drink.idDrink}`}>
            <Image
              src={drink.strDrinkThumb}
              alt='Drink'
              width={300}
              height={300}
              className='w-48 h-48 rounded-lg shadow-lg m-8'
              priority
            />
            <h1
              key={drink.idDrink}
              className='cursor-pointer m-10 hover:bg-cyan-600 duration-1000 p-5 transition rounded-md'>
              {drink.strDrink}
            </h1>
          </Link>
        );
      })}
    </div>
  );
};
export default Drinks;
