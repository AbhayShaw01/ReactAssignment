import { FaPersonDotsFromLine } from 'react-icons/fa6';
import { MdLockPerson, MdManageAccounts } from 'react-icons/md';
import calendar from '../assets/calendar.svg';
import InfoCard from './InfoCard';

export default function Business() {
  const infoData = [
    {
      icon: <MdManageAccounts  />,
      heading: 'Admin Management',
      description: 'Easily manage your organizations users and scheduling processes from one centralized place.',
    },
    {
      icon: <MdLockPerson />,
      heading: 'Security and Compliance',
      description: 'Trust Calendly to safeguard company data and meet your compliance requirements.',
    },
    {
      icon: <FaPersonDotsFromLine  />,
      heading: 'Learn more about calendly for Enterprise',
      description: 'Connect up to six calendars per user to check real-time availability.',
    },
  ];

  return (
    <div className='pt-10'>
      <p className="text-md text-center text-4xl font-bold text-heading ">For all team sizes</p>
      <p className="sm:text-lg text-md text-center sm:max-w-[800px]   max-w-xs mx-auto pt-8 text-subHeading  ">From small businesses to Fortune 100 enterprises—Calendly supports <br />
      scheduling at scale with robust security and administrative controls</p>
      <div className="sm:max-w-[1200px] sm:mx-auto sm:flex ">
        <section className="p-4 mx-4 sm:mx-0 sm:w-[50%]">
          {infoData.map((data, index) => (
            <InfoCard
              key={index}
              heading={data.heading}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </section>
        <section className="sm:justify-center sm:items-center hidden sm:flex sm:w-[50%]">
          <img src={calendar} alt="calendar-img" className="object-cover" />
        </section>
      </div>
    </div>
  );
}
