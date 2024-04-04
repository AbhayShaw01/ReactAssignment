import { ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface InfoCardProps {
  gridForm?: boolean;
  heading: string;
  description: string;
  icon: ReactNode;
}

export default function InfoCard({ gridForm, heading, description, icon }: InfoCardProps) {
  const cardClass = gridForm ? "bg-white shadow-xl sm:shadow-xl" : "";
  
  return (
    <div className={`card sm:max-w-md border ${!gridForm ? 'sm:shadow-none ': ''} shadow-lg  border-gray-300 sm:border-none rounded-lg ml-10 mt-10  ${cardClass} `}>
      <figure className="pt-3 pl-4">
        <p className="text-primary text-2xl">
          {icon}
        </p>
      </figure>
      <div className="card-body pt-3 pl-4">
        <h2 className="card-title font-bold text-lg pb-2 text-secondary">
          {heading}
        </h2>
        <p className="text-md font-normal h-24 overflow-y-auto pb-4 pr-4 text-balance text-desc">
          {description}
        </p>
        <div className="card-actions justify-end pb-6">
          <span className="flex items-center text-primary">
            <a>Learn More</a>
            <p className="pt-1 ">
              <IoIosArrowForward />
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

