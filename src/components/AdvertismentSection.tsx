
export default function AdvertismentSection() {
  return (
    <div className="text-center sm:pt-20 pt-10 pb-14 space-y-10 bg-[#D3E0FF]">
      <p className="sm:text-4xl  text-2xl font-bold text-secondary">
        We make the manual work out of <br />
        scheduling
      </p>
      <p className="text-subHeading sm:text-lg text-md pl-6 pr-6">
        Get instant access to all of these features ond more, so you can have
        more  <br />productive meetings without the back-and-forth
      </p>
      <div className="space-x-4">
        <button className="py-2 px-6 rounded-3xl text-white bg-primary font-semibold">
          Start for free
        </button>
        <button className="py-2 px-6 rounded-3xl border  border-black font-semibold">
          Contact Sales
        </button>
      </div>
    </div>
  );
}
