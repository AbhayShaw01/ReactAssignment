import meetImg from "../assets/meetImg.svg";
export default function HeroSection() {
  return (
    <div className="sm:max-w-[1200px]  sm:mt-24 sm:mb-16 sm:mx-auto sm:flex pb-10 sm:pb-0">
      <section className=" p-4 mx-4 sm:mx-0 sm:w-[40%] ">
        <h4 className="hidden sm:block sm:pt-4 sm:pl-4 sm:pb-4 text-primary font-semibold ">CALENDLY FEATURES</h4>
        <h2 className="sm:pt-2 sm:pl-4 pt-20 pb-5 text-heading text-4xl font-bold text-center sm:text-left  sm:text-wrap  ">
          Take the hassle out  <span className="text-primary">scheduling</span>
        </h2>
        <p className="text-center text-desc sm:text-left sm:pl-4 font-normal  text-md sm:text-lg pt-10 pb-20 sm:pt-0 sm:pb-0 ">
        Calendly helps you book better meetings <br />
faster by syncing and integrating <br />
everything in one intuitive platform
        </p>
        <button className="bg-primary text-center text-white py-4  text-2xl sm:ml-10 sm:mt-10 sm:mb-20   w-full mx-auto sm:rounded-3xl sm:font-bold sm:text-sm  sm:w-[200px]">
          Start for free
        </button>
      </section>
      <section className="hidden  sm:flex sm:w-[60%] justify-center sm:max-h-[500px] pt-2">
        <img src={meetImg} alt="calendar-img" className="object-cover" />
      </section>
    </div>
  );
}
