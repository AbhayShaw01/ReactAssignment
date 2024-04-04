
import { FaNetworkWired } from 'react-icons/fa';
import { GiTeamDowngrade } from 'react-icons/gi';
import { LuRouter } from 'react-icons/lu';
import InfoCard from './InfoCard';

export default function JumboTron() {
  const infoData = [
    {
      icon: <FaNetworkWired  />,
      heading: 'Availability Preferences',
      description: `Customize exactly how and when you'rebooked.`,
    },
    {
      icon: <GiTeamDowngrade  />,
      heading: 'Teams Scheduling',
      description: 'The automated scheduling you know and love — for multi-person meetings.',
    },
    {
      icon: <LuRouter  />,
      heading: 'Routing Forms',
      description: 'Request information to efficiently screen and qualify people before they can schedule with you.',
    },
  ];

  return (
    <div className="w-full flex-col h-[400px] ">
      <div className="bg-backdropSecond h-full">
        <p className="text-md text-center text-4xl font-bold text-white pt-16">
          Spend more time connecting, not <br />
          scheduling
        </p>
        <p className="text-md text-center text-white sm:max-w-[800px] font-normal  max-w-xs mx-auto pt-12 pb-16">
          Book more meetings and hit goals faster by streamlining your <br />
          scheduling process and automating manual busywork
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 hidden  -translate-y-40 sm:max-w-[1200px] mx-auto">
        {infoData.map((data, index) => (
          <InfoCard
            key={index}
            heading={data.heading}
            description={data.description}
            icon={data.icon}
            gridForm={true}
          />
        ))}
      </div>
    </div>
  );
}

