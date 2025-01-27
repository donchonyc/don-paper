import type React from "react"
import { useState } from "react"
import type { Work } from "@/types"
import { WorkModal } from "./WorkModal"

const workData: Work[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for Project 1",
    image: "/project1.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for Project 2",
    image: "/project2.jpg",
  },
  // Add more projects as needed
]

export const WorkSection: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<number | null>(null)

  const handleWorkClick = (id: number) => {
    setSelectedWork(id)
  }

  const handleCloseModal = () => {
    setSelectedWork(null)
  }

  const handleNextWork = () => {
    setSelectedWork((prev) => (prev !== null ? (prev + 1) % workData.length : null))
  }

  const handlePrevWork = () => {
    setSelectedWork((prev) => (prev !== null ? (prev - 1 + workData.length) % workData.length : null))
  }

  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Removed h2 tag as per update */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workData.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleWorkClick(work.id)}
            >
              <img src={work.image || "/placeholder.svg"} alt={work.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedWork !== null && (
        <WorkModal
          work={workData[selectedWork]}
          onClose={handleCloseModal}
          onNext={handleNextWork}
          onPrev={handlePrevWork}
        />
      )}
    </section>
  )
}

