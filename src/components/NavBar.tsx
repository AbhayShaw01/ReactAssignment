
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import mainLogo from "../assets/logo.svg";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const menuItems: string[] = [
    "Individual",
    "Teams",
    "Enterprise",
    "Products",
    "Pricing",
    "Resources"
  ];

  return (
    <div className="bg-gray-100 pt-4 sm:pt-0 fixed top-0 w-full z-[99] px-4 items-center justify-between">
      <div className="sm:max-w-[1200px] w-full sm:mx-auto flex justify-between items-center py-4">
        <div className="brand">
          <img src={mainLogo} alt="brand-logo" width={150} />
        </div>
        <div className="hidden sm:w-full sm:block sm:max-w-[60%] mx-auto">
          <ul className="flex py-2 justify-between text-secondary font-bold">
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="login-section sm:flex py-2 items-center sm:px-4 relative">
          {openMenu ? (
            <MdClose
              className="sm:hidden hover:cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            />
          ) : (
            <GiHamburgerMenu
              className="sm:hidden hover:cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
        
          <p className="rounded-lg sm:px-4 py-2 hidden text-secondary sm:block font-bold">Log In</p>
          <button className="bg-primary text-white font-bold text-sm rounded-3xl px-4 py-3 hidden sm:block">
            Get Started
          </button>
        </div>
      </div>
      
      {openMenu && (
        <div className="absolute w-full left-1/2  -translate-x-1/2    bg-gray-100 pt-2 pb-4 -translate-y-6 border shadow-xl">
          <ul className="flex flex-col justify-between text-secondary font-bold px-4">
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
