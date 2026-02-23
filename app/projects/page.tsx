import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Little Lemon",
    href: "https://mgj0226.github.io/LittleLemon/",
    image: "/images/LittleLemon.png",
    description: "A restaurant website showcasing menu items and reservations.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg shadow-lg hover:shadow-2xl transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={192}
              className="w-full h-65 object-cover rounded-t-lg"
            />
            <div className="p-4 bg-white text-gray-900 rounded-b-lg">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}