"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

function foodDisplaySquare(urlName: string, name: string){
  return(
    <div className="flex flex-col items-center w-[400px] justify-center bg-white rounded-xl">
      <Image 
      src= {urlName}
      alt = "food"
      width={250}
      height={300}
      />
      <div className="bg-gray-400 w-full text-center rounded-xl text-lg">{name}</div>
    </div>
  );
}
export default function MenuBoardView() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center h-fit rounded-full bg-red-700">
      <button className="absolute left-10 top-10 bg-red-600 p-10 rounded-xl" onClick={() => router.back()}>Go Back</button>
      <div className="text-6xl mt-10">Menu Board</div>
      <div className="text-2xl my-10 underline">Sides</div>
      <div className="flex flex-row justify-center items-center flex-wrap gap-5">
        <div>{foodDisplaySquare("/WhiteSteamedRice.png", "White Steamed Rice")}</div>
        <div>{foodDisplaySquare("/FriedRice.png", "Fried Rice")}</div>
        <div>{foodDisplaySquare("/ChowMein.png", "Chow Mein")}</div>
        <div>{foodDisplaySquare("/SuperGreens.png", "Super Greens")}</div>
      </div>

      <div className="text-2xl my-10 underline">Entrees</div>
      <div className="flex flex-row justify-center items-center flex-wrap gap-5">
        <div>{foodDisplaySquare("/BeijingBeef.png", "Beijing Beef")}</div>
        <div>{foodDisplaySquare("/VeggieOrangeChicken.png", "Beyond The Original Orange Chicken")}</div>
        <div>{foodDisplaySquare("/TheOriginalOrangeChicken.png", "The Original Orange Chicken")}</div>
        <div>{foodDisplaySquare("/BlackPepperSirloinSteak.png", "Black Pepper Sirloin Steak")}</div>
        <div>{foodDisplaySquare("/HoneyWalnutShrimp.png", "Honey Walnut Shrimp")}</div>
        <div>{foodDisplaySquare("/GrilledTeriyakiChicken.png", "Grilled Teriyaki Chicken")}</div>
        <div>{foodDisplaySquare("/BroccoliBeef.png", "Broccoli Beef")}</div>
        <div>{foodDisplaySquare("/KungPaoChicken.png", "Kung Pao Chicken")}</div>
        <div>{foodDisplaySquare("/HoneySesameChickenBreast.png", "Honey Sesame Chicken Breast")}</div>
        <div>{foodDisplaySquare("/MushroomChicken.png", "Mushroom Chicken")}</div>
        <div>{foodDisplaySquare("/SweetFireChickenBreast.png", "Sweet Fire Chicken Breast")}</div>
        <div>{foodDisplaySquare("/StringBeanChickenBreast.png", "String Bean Chicken Breast")}</div>
        <div>{foodDisplaySquare("/SuperGreens.png", "Super Greens")}</div>
      </div>

      <div className="text-2xl my-10 underline">Appetizers</div>
      <div className="flex flex-row justify-center items-center flex-wrap gap-5 mb-10">
        <div>{foodDisplaySquare("/ChickenEggRoll.png", "Chicken Egg Roll")}</div>
        <div>{foodDisplaySquare("/VeggieSpringRoll.png", "Veggie Spring Roll")}</div>
        <div>{foodDisplaySquare("/CreamCheeseRangoon.png", "Cream Cheese Rangoon")}</div>
        <div>{foodDisplaySquare("/ApplePieRoll.png", "Apple Pie Roll")}</div>
      </div>

      <div className="text-2xl my-10 underline">Drinks</div>
      <div className="flex flex-row justify-center items-center flex-wrap gap-5 mb-10">
        <div>{foodDisplaySquare("/BottledWater.png", "Bottled Water")}</div>
        <div>{foodDisplaySquare("/Coca-Cola.png", "Coca-Cola")}</div>
        <div>{foodDisplaySquare("/DietCoke.png", "Diet Coke")}</div>
        <div>{foodDisplaySquare("/IcedTea.png", "Iced Tea")}</div>
        <div>{foodDisplaySquare("/MinuteMaidLemonade.png", "Minute Maid Lemonade")}</div>
        <div>{foodDisplaySquare("/Sprite.png", "Sprite")}</div>


      </div>
    </div>
  );
}