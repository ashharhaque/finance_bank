import React from 'react';
import Image from 'next/image';
import Person1 from "@/public/katrina.jpg";

const teamMembers = [
  { 
    name: 'Alice Johnson', 
    role: 'Project Manager', 
    description: 'Oversees project timelines and ensures smooth delivery.',
    experience: '5 years',
    image: Person1 
  },
  { 
    name: 'Bob Smith', 
    role: 'Lead Developer', 
    description: 'Expert in full-stack development and team coordination.',
    experience: '8 years',
    image: Person1
  }
];

const TeamMember = ({ name, role, description, experience, image }) => (
  <div className="bg-gray-800 text-white shadow-lg rounded-2xl p-4 text-center relative pb-20">
    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
      <Image
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white"
      />
    </div>
    <div className="pt-20">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-400">{role}</p>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-gray-400 mt-1">Experience: {experience}</p>
    </div>
  </div>
);

const TeamSection = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-center mt-10 font-heading mb-20 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
        MEET OUR FOUNDERS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 space-y-10 sm:space-y-0">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
