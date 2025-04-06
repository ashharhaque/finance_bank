import React from "react";
import Image from "next/image";
import Person1 from "@/public/katrina.jpg"; // Replace with actual image paths

const teamMembers = [
  {
    name: "Kundan Kumar Singh",
    role: "Founder & Director",
    description: `With over 15 years of experience in investment banking, debt syndication, and capital advisory, Kundan Kumar Singh is a seasoned financial consultant and the driving force behind Team Works Advisors Pvt Ltd. His expertise spans working capital management, project financing, and structured finance, helping businesses optimize their financial strategies and secure the right funding solutions.

    Before establishing Team Works Advisors, Kundan held leadership roles at Standard Chartered Bank and HSBC Bank, where he specialized in business banking, MSME finance, and credit structuring. His deep understanding of financial markets, combined with a client-centric approach, has enabled him to successfully advise businesses across diverse industries, from manufacturing and infrastructure to technology and healthcare.
    
    At Team Work Advisors, Kundan and his team provide tailored financial solutions, leveraging strong banking relationships and market insights to help businesses achieve sustainable growth. His hands-on approach, strategic vision, and commitment to excellence make him a trusted advisor in the investment banking space.
    
    Kundan holds a strong track record in syndicating debt, raising structured finance, and optimizing working capital cycles for MSMEs & mid-sized corporations. His ability to navigate complex financial landscapes and deliver value-driven solutions has earned him a reputation as a trusted financial partner for businesses seeking growth and stability.`,
    experience: "15 years",
    image: Person1,
  },
  {
    name: "Mr. Rishi Arora",
    role: "Founder & Director",
    description: `Mr. Rishi Arora is a seasoned finance professional with over 23 years of expertise in finance, accounting, compliance, and mergers & acquisitions (M&A) across diverse industries. A qualified Chartered Accountant (CA) and a Doctorate (Ph.D.) in Income Tax, he possesses deep domain knowledge in corporate finance, taxation, and strategic advisory.

    As the Founder & Director of Team Work Advisors Pvt Ltd, Mr. Arora has been instrumental in establishing the firm as a leading financial advisory company, providing debt syndication, working capital management, capital advisory, and transaction structuring services. Under his leadership, Team Work Advisors has successfully assisted businesses in optimizing financial performance, securing funding, and navigating complex regulatory landscapes.
    
    Throughout his career, Mr. Arora has played a key role in advising businesses on financial restructuring, M&A transactions, regulatory compliance, and tax planning, helping clients achieve sustainable growth and operational efficiency. His expertise spans multiple sectors, including manufacturing, technology, banking, healthcare, and infrastructure, making him a trusted advisor to corporations and entrepreneurs.
    
    With a vision to drive financial excellence and strategic business growth, Mr. Arora continues to lead Team Work Advisors in delivering innovative financial solutions, risk management strategies, and value-driven advisory services to businesses across industries.`,
    experience: "23 years",
    image: Person1,
  },
];

const TeamMember = ({ name, role, description, experience, image }) => (
  <div className="bg-white shadow-xl rounded-3xl p-6 pt-20 text-center relative group transition-all hover:shadow-2xl duration-300">
    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
      <Image
        src={image}
        alt={name}
        width={128}
        height={128}
        className="rounded-full object-cover border-4 border-white shadow-md"
      />
    </div>
    <div className="pt-6">
      <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
      <p className="text-orange-700 font-medium mt-1">{role}</p>
      <div className="text-gray-700  mt-4 text-sm leading-relaxed whitespace-pre-line text-justify">
        {description}
      </div>
      <p className="text-gray-700 text-sm mt-4 italic">
        Experience: {experience}
      </p>
    </div>
  </div>
);

const TeamSection = () => (
  <section id="ourfounders" className="py-16 bg-gradient-to-br from-orange-50 to-white">
    <div className="container mx-auto px-4">
    <h2 className="text-center font-heading  mb-6 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
           Meet Our Founders
          </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
