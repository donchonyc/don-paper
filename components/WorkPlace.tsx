"use client";
import { useState } from "react";
import { WorkModal } from "./WorkModal";

interface Work {
  id: number;
  title: string;
  tags: string[];
  description: string;
  fullDescription: string;
  image: string;
  techStack: string[];
}

interface WorkPlaceProps {
  id?: string;
}

const WorkPlace: React.FC<WorkPlaceProps> = ({ id }) => {
  const types: string[] = ["Work", "Playground"];
  const works: Work[] = [
    {
      id: 1,
      title: "Work 1",
      tags: ["figma", "react"],
      description: "This is a description of work 1.",
      fullDescription: "loreum ipsum",
      image: "/next.svg",
      techStack: ["figma", "react", "nextjs", "tailwindcss"],
    },
    {
      id: 2,
      title: "Helping Figma's New UI",
      tags: ["figma", "react"],
      description: "This is a description of work 1.",
      fullDescription: "loreum ipsum",
      image: "/next.svg",
      techStack: ["figma", "react", "nextjs", "tailwindcss"],
    },
    {
      id: 3,
      title: "Work 3",
      tags: ["figma", "react"],
      description: "This is a description of work 1.",
      fullDescription: "loreum ipsum",
      image: "/next.svg",
      techStack: ["figma", "react", "nextjs", "tailwindcss"],
    },
    {
      id: 4,
      title: "Save Us From Ourselves",
      tags: ["TouchDesigner", "Arduino"],
      description: "This is a description of work 1.",
      fullDescription: "loreum ipsum",
      image: "/next.svg",
      techStack: ["figma", "react", "nextjs", "tailwindcss"],
    },
  ];

  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  const handleWorkClick = (id: number) => {
    setSelectedWork(id);
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  const handleNextWork = () => {
    const currentIndex = works.findIndex((work) => work.id === selectedWork);

    if (currentIndex === -1) {
      return null;
    }

    const nextIndex = (currentIndex + 1) % works.length;

    setSelectedWork(works[nextIndex].id);
  };

  const handlePrevWork = () => {
    const currentIndex = works.findIndex((work) => work.id === selectedWork);

    if (currentIndex === -1) {
      return null;
    }

    const prevIndex = (currentIndex - 1 + works.length) % works.length;

    setSelectedWork(works[prevIndex].id);
  };

  return (
    <section id={id} className="px-4 py-96 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 grid grid-cols-2 gap-1">
        {types.map((type, index) => (
          <button
            key={index}
            className="hover:text-cloud transition-colors text-left"
          >
            {type}
          </button>
        ))}
      </h2>
      <div className="grid grid-cols-2 gap-1">
        {works.map((work, index) => (
          <button
            onClick={() => handleWorkClick(work.id)}
            key={index}
            className="backdrop-blur-sm rounded-lg p-3 hover:text-cloud transition-colors text-left"
          >
            <h3 className="text-2xl font-medium mb-2">{work.title}</h3>
            <div className="flex flex-wrap gap-1">
              {work.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-xs rounded-full text-cloud/30 border border-cloud/30 mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
      {selectedWork && (
        <WorkModal
          work={works.find((work) => work.id === selectedWork)!}
          onClose={handleCloseModal}
          onNext={handleNextWork}
          onPrev={handlePrevWork}
        />
      )}
    </section>
  );
};

export default WorkPlace;
