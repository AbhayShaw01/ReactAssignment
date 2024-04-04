import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import appleBadge from "../assets/apple.png";
import playDownload from "../assets/google-play-badge.png";
import { FooterLink, footerSections } from "../constants/constant";

const Footer: React.FC = () => {
  return (
    <>
      <div className="sm:flex w-full bg-[#f8f9fb]   pt-10 sm:pt-28 pb-20 pl-6 pr-6">
        <div className="sm:flex max-w-[1200px] mx-auto ">
          <div className=" w-full sm:w-[40%] space-y-0">
            <h1 className="footer-heading sm:text-4xl text-2xl font-bold mb-5 sm:mb-0 text-secondary">
              Easy <br />
              <p className="text-primary">ahead</p>
            </h1>
            <p className="sm:pt-8 text-subHeading  text-md sm:text-lg font-normal">
              We take the work out of connecting with <br /> others so you can accomplish more.
            </p>
            <form className="pt-10 mr-10 sm:mr-0">
              <select className=" w-full py-2  rounded px-2  ">
                <option>English</option>
              </select>
            </form>
            <div className="flex object-cover items-center ">
              <img src={playDownload} alt="play" className="w-36 h-16" />
              <img src={appleBadge} alt="play" />
            </div>
            <div className="flex mx-auto text-2xl pb-10 sm:pb-0 gap-6 items-center ">
              <a>
                <FaTwitter />
              </a>
              <a>
                <FaFacebookF />
              </a>
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaLinkedinIn />
              </a>
              <a>
                <FiYoutube />
              </a>
            </div>
          </div>
          <div className=" sm:w-[60%]  gap-y-10 sm:px-16 w-full  flex-wrap justify-between sm:grid grid-cols-3 gap-8">
            {footerSections.map((section: FooterLink, index: number) => (
              <div key={index}>
                <h3 className="pb-2 font-bold text-lg pr-20">{section.title}</h3>
                <ul className="flex flex-col text-sm pb-2">
                  {section.links.map((link: string, linkIndex: number) => (
                    <a key={linkIndex} className="pb-2">
                      {link}
                    </a>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-20 font-semibold  text-desc flex justify-between sm:max-w-[1200px] px-12 sm:px-0 mx-auto text-xs">
        <span>Copyright, Calendly2002</span>
        <span className="sm:mr-10">Privacy / Terms and Conditions</span>
      </div>
    </>
  );
};

export default Footer;
