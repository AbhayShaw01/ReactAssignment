export interface FooterLink {
    title: string;
    links: string[];
  }
  
  export const footerSections: FooterLink[] = [
    {
      title: "About",
      links: ["About Calendly", "Contact sales", "Newsroom", "Careers", "Security"],
    },
    {
      title: "Solutions",
      links: ["Customer Success", "Sales", "Recruiting","Information Technology","Marketing"],
    },
    {
      title: "PopularFeatures",
      links: ["Embedded Calendly", "Availabilty", "Sending Notification","Using Calendly Mobile"],
    },
    {
      title: "Support",
      links: ["Help Center", "Video Tutorials", "Cookie Settings"],
    },
    {
      title: "Add Ons",
      links: ["Download for Chrome", "Download for Firefox"],
    },
    {
      title: "Developers",
      links: ["Dev Tools"],
    },
  ];
  




// heroData.ts

import salesImg from "../assets/sales.png";

export interface HeroCards {
  title: string;
  description: string;
  image: string; 
}

export const heroData: HeroCards[] = [
  {
    title: "Sales",
    description: "Get to your best leads faster.",
    image: salesImg,
  },
  {
    title: "Recruiting",
    description: `Less emailing, more interviews`,
    image: salesImg,
  },
  {
    title: "Customer Success",
    description: `Connect with customers when it matters`,
    image: salesImg,
  },
  {
    title: "Education",
    description: `Boost student success`,
    image: salesImg,
  },
];

