import { cn } from "@/utils/cn";
import { Metadata } from "next";
import { Young_Serif, Outfit } from "next/font/google";

import Image from "next/image";
import Link from "next/link";

const youngSerif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
});
const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor - Recipe Page Challenge",
  description: "My Recipe Page solution",
};

export default function ChallengesRecipePage() {
  return (
    <body className="bg-[#f3e5d8] text-[#302d2c]">
      <header className="max-w-3xl mx-auto px-3 py-4 flex gap-x-3 font-black">
        <Link href="/" className="hover:bg-[#302d2c] hover:text-[#f3e5d8]">
          /
        </Link>
        <p>&gt;</p>
        <p className="bg-[#302d2c] text-[#f3e5d8] w-fit">
          /challenges/recipe-page
        </p>
      </header>
      <main
        className={cn(
          outfit.className,
          "max-w-3xl mx-auto sm:px-3 sm:py-4 space-y-6 text-[#5f574e] font-medium",
        )}
      >
        <section className="rounded-xl bg-white sm:p-10 space-y-6 sm:space-y-10">
          <div className="relative h-76 sm:rounded-md overflow-hidden">
            <Image
              fill
              alt="omelette"
              className="object-cover"
              src="/challenges/recipe-page/image-omelette.jpeg"
            />
          </div>
          <div className="space-y-4 sm:mx-0 mx-6">
            <h1 className={cn(youngSerif.className, "text-4xl text-[#302d2c]")}>
              Simple Omelette Recipe
            </h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vbegetable and meats.
            </p>
          </div>
          <div className="bg-[#fff5fa] sm:p-8 p-4 sm:mx-0 mx-6 rounded-md space-y-4">
            <h2 className="text-[#7b284f] font-bold text-xl">
              Preparation Time
            </h2>
            <ul className="list-disc marker:text-[#7b284f] sm:pl-6 pl-4 space-y-2">
              <li className="sm:pl-6 pl-4">
                <span className="font-bold">Total</span>: Approximately 10
                minutes
              </li>
              <li className="sm:pl-6 pl-4">
                <span className="font-bold">Preperation</span>: 5 minutes
              </li>
              <li className="sm:pl-6 pl-4">
                <span className="font-bold">Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>
          <div className="space-y-4 sm:mx-0 mx-6">
            <h2 className={cn(youngSerif.className, "text-3xl text-[#854632]")}>
              Ingredients
            </h2>
            <ul className="list-disc marker:text-[#854632] pl-6 space-y-2">
              <li className="pl-6">2-3 large eggs</li>
              <li className="pl-6">Salt, to taste</li>
              <li className="pl-6">Papper, to taste</li>
              <li className="pl-6">1 tablespoon of butter or oil</li>
              <li className="pl-6">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          <div className="h-px bg-[#302d2c]/20 sm:mx-0 mx-6" />
          <div className="space-y-4 sm:mx-0 mx-6">
            <h2 className={cn(youngSerif.className, "text-3xl text-[#854632]")}>
              Instructions
            </h2>
            <ol className="list-decimal marker:font-bold marker:text-[#854632] pl-6 space-y-2">
              <li className="pl-6">
                <span className="font-bold">Beat the Eggs</span>: In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li className="pl-6">
                <span className="font-bold">Heat the pan</span>: Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className="pl-6">
                <span className="font-bold">Cook the omelette</span>: Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li className="pl-6">
                <span className="font-bold">Add fillings (optional)</span>: When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>
              <li className="pl-6">
                <span className="font-bold">Fold and serve</span>: As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li className="pl-6">
                <span className="font-bold">Enjoy</span>: Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </div>
          <div className="h-px bg-[#302d2c]/20 sm:mx-0 mx-6" />
          <div className="space-y-4 sm:mx-0 mx-6">
            <h2 className={cn(youngSerif.className, "text-3xl text-[#854632]")}>
              Nutrition
            </h2>
            <table className="w-full space-y-4">
              <caption className="text-left">
                The table below shows nutritional values per serving without the
                additional fillings.
              </caption>
              <tbody>
                <tr className="border-b border-b-[#302d2c]/20">
                  <td className="p-4">Calories</td>
                  <td className="font-bold text-[#854632]">277kcal</td>
                </tr>
                <tr className="border-b border-b-[#302d2c]/20">
                  <td className="p-4">Carbs</td>
                  <td className="font-bold text-[#854632]">0g</td>
                </tr>
                <tr className="border-b border-b-[#302d2c]/20">
                  <td className="p-4">Protein</td>
                  <td className="font-bold text-[#854632]">20g</td>
                </tr>
                <tr>
                  <td className="p-4">Fat</td>
                  <td className="font-bold text-[#854632]">22g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </body>
  );
}
