"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Photoshop</li>
        <li>Illustor</li>
       
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li> */}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li> */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-6xl pb-3 bg-clip-text text-transparent bg-gradient-to-b">About Me</h2>
          <p className="text-base lg:text-lg">
          Karthi is a passionate graphic designer and artist with a flair for creating visually captivating designs and stunning artworks. 
          With a keen eye for detail and a deep understanding of color, composition, and typography, he crafts designs that communicate 
          effectively and leave a lasting impression.
           His artistic versatility shines through in diverse projects, from digital illustrations to branding and creative storytelling
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
