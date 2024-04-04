import { IoIosArrowForward } from "react-icons/io";
import { HeroCards as HeroCardType } from "../constants/constant";

interface HeroCardProps {
  hero: HeroCardType;
}

export default function HeroCard({ hero }:HeroCardProps){
  return (
    <div className="card sm:w-52 w-64 flex flex-col">
      <figure>
        <img src={hero.image} alt={hero.title} className="h-28 w-full overflow-hidden rounded-t-md" />
      </figure>
      <div className="card-body pt-3 pl-4 bg-white rounded-b-lg flex-grow flex flex-col justify-between">
        <div>
          <h2 className="card-title font-semibold text-lg pb-4 text-secondary">{hero.title}</h2>
          <p className="text-md font-normal pb-8 text-desc">{hero.description}</p>
        </div>
        <div className="card-actions justify-end">
          <span className="flex items-center text-primary sm:text-sm pb-4 ">
            <a className="font-semibold">Learn More</a>
            <p className="pt-1">
              <IoIosArrowForward />
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
