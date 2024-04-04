import ancestryImg from "../assets/Ancestry.jpg";
import ebayImg from "../assets/EBay New.jpg";
import lorealImg from "../assets/L'Oréal.svg";

export default function BrandSection() {
  return (
    <div className="flex flex-col bg-backdrop items-center mt-0 pt-6 sm:pt-16 px-4 sm:px-0">
      <p className="text-2xl text-center text-secondary font-bold sm:pb-8">
        Subscribers scheduling from more than <br />{" "}
        <strong className="text-primary">1,000,000 </strong>users worldwide
      </p>
      <div className="flex  justify-center mx-auto mt-4 sm:max-w-[1200px] overflow-hidden">
        <img
          src={lorealImg}
          alt="L'Oréal"
          className="w-full sm:w-auto h-auto mx-2 mb-4 sm:max-w-[30vh] sm:max-h-[20vh]"
        />
        <img
          src={ancestryImg}
          alt="Ancestry"
          className="w-full sm:w-auto h-auto mx-2 mb-4 sm:max-w-[30vh] sm:max-h-[20vh]"
        />
        <img
          src={ebayImg}
          alt="eBay"
          className="w-full sm:w-auto h-auto mx-2 mb-4 sm:max-w-[30vh] sm:max-h-[20vh]"
        />
        <img
          src={lorealImg}
          alt="L'Oréal"
          className="w-full sm:w-auto h-auto mx-2 mb-4 sm:max-w-[30vh] sm:max-h-[20vh]"
        />
        <img
          src={lorealImg}
          alt="L'Oréal"
          className="w-full sm:w-auto h-auto mx-2 mb-4 sm:max-w-[30vh] sm:max-h-[20vh]"
        />
        <img
          src={lorealImg}
          alt="L'Oréal"
          className="w-full sm:w-auto h-auto mx-2 mb-4 sm:max-w-[30vh] sm:max-h-[20vh]"
        />
      </div>
    </div>
  );
}
