import { AiOutlineDatabase } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaDesktop } from 'react-icons/fa';
import { TbCloudDataConnection } from 'react-icons/tb';
import media from '../assets/media.svg';
import InfoCard from './InfoCard';

export default function Features() {
  const featureData = [
    {
      icon: <AiOutlineDatabase  />,
      heading: 'Workflows',
      description: 'Automate communications before and after meetings.',
    },
    {
      icon: <FaDesktop/>,
      heading: 'Website Scheduling',
      description: 'Add Calendly to your website to streamline scheduling.',
    },
    {
      icon: <TbCloudDataConnection  />,
      heading: 'Calendar Connections',
      description: 'Connect up to six calendars per user to check real-time availability',
    },
    {
      icon: <BiMenuAltLeft  />,
      heading: 'Meeting Polls',
      description: 'Poll your attendees for their availability and arrive at the best time for most',
    },
  ];

  return (
    <div className="sm:max-w-[1200px] sm:mx-auto sm:flex sm:py-10 sm:mt-40">
      <section className="p-4 mx-4 lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 sm:mx-0 sm:w-[60%]">
        {featureData.map((data, index) => (
          <InfoCard
            key={index}
            heading={data.heading}
            description={data.description}
            icon={data.icon}
          />
        ))}
      </section>
      <section className="hidden sm:flex sm:w-[40%]">
        <img src={media} alt="calendar-img" className="object-cover" />
      </section>
    </div>
  );
}

