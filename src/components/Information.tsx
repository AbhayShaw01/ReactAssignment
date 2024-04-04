import { GrCloudUpload } from "react-icons/gr";
import { IoWalletOutline } from "react-icons/io5";
import { LuMonitorDown } from "react-icons/lu";
import { MdOutlineInstallMobile } from "react-icons/md";
import media from "../assets/media.svg";
import InfoCard from "./InfoCard";


export default function Information() {
  const infoData = [
    {
      icon: <LuMonitorDown />,
      heading: "Calendly for Browsers",
      description: "Use Calendly while you're on the web, without switching tabs.",
    },
    {
      icon: <MdOutlineInstallMobile />,
      heading: "Calendly for Mobile",
      description: "Book meetings, get notifications, & more on the go.",
    },
    {
      icon: <GrCloudUpload />,
      heading: "Calendly for CRMS",
      description: "Make booking meetings simple for teams who use CRMs.",
    },
    {
      icon: <IoWalletOutline />,
      heading: "Payments",
      description: "Streamline payments for Calendly events, with Paypal or Stripe.",
    },
  ];

  return (
    <div className="pt-10 bg-[#D8ECFF]">
      <p className="text-md text-center text-4xl font-bold text-heading ">
        Stay in sync from any
        <br />
        app in device
      </p>
      <p className="sm:text-lg text-md text-center  text-subHeading font-normal sm:max-w-[800px] pt-8 pl-6 pr-6 max-w-xs mx-auto ">
        Reclaim your time and your tabs with native integrations with over 70 <br />
        different apps, and mobile and browser apps for easier access.
      </p>
      <div className="sm:max-w-[1200px] sm:mx-auto sm:flex sm:py-10">
        <section className=" hidden sm:flex sm:w-[40%]">
          <img src={media} alt="calendar-img" className="object-cover" />
        </section>
        <section className="p-4 mx-4 bg-[#D8ECFF] lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 sm:mx-0 sm:w-[60%]">
          {infoData.map((data, index) => (
            <InfoCard
              key={index}
              heading={data.heading}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
