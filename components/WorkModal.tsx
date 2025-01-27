import type React from "react"
import Image from "next/image"

interface Work {
  id: number
  title: string
  tags: string[]
  description: string
  fullDescription: string
  image: string
  techStack: string[]
}

interface WorkModalProps {
  work: Work
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export const WorkModal: React.FC<WorkModalProps> = ({ work, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-3xl w-full mx-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">{work.title}</h2>
        <div className="relative w-full h-64 mb-4">
          <Image
            src={work.image || "/placeholder.svg"}
            alt={work.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="text-gray-600 mb-4">{work.fullDescription}</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            {work.techStack.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-200 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={onPrev} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
            Previous
          </button>
          <button onClick={onNext} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

