import lorealImg from "../assets/L'Oréal.svg";
import ancestryImg from "../assets/Ancestry.jpg";
import ebayImg from "../assets/EBay New.jpg";

export default function BrandSection() {
  const imageUrls = [lorealImg, ancestryImg, ebayImg, lorealImg, ancestryImg, ebayImg];

  return (
    <div className="flex flex-col bg-backdrop items-center mt-0 pt-6 sm:pt-16 px-4 sm:px-0">
      <p className="text-2xl text-center text-secondary font-bold pb-8">
        Subscribers scheduling from more than <br />{" "}
        <strong className="text-primary">1,000,000 </strong>users worldwide
      </p>
      <div className="sm:flex hidden  justify-center mx-auto mt-4 sm:max-w-[1200px] overflow-hidden">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt='logo'
            className="w-full sm:w-auto h-auto mx-2 mb-4 sm:max-w-[30vh] sm:max-h-[20vh]"
          />
        ))}
      </div>
    </div>
  );
}
