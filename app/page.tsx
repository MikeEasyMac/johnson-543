import Link from "next/link";
import { FaAnchor, FaShieldAlt, FaCode, FaGithub } from "react-icons/fa";

const featuredProjects = [
  {
    title: "Portfolio Website",
    description:
      "A full-stack portfolio built with Next.js, TypeScript, MongoDB, and Tailwind CSS featuring dark mode and a REST API layer.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/mikeeasymac/johnson-543",
  },
  {
    title: "Network Security Analyzer",
    description:
      "A Python-based tool for capturing and analyzing network traffic to detect anomalies and potential security threats.",
    tech: ["Python", "Scapy", "Linux", "Flask"],
    githubUrl: null,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-700 rounded-lg shadow p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Michael Johnson
        </h1>
        <p className="text-lg text-red-700 dark:text-red-400 font-medium mb-4">
          Computer Science Student · Cybersecurity Concentration · U.S. Navy Veteran
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mb-6">
          Former U.S. Navy Submariner and Sonar Technician who brings discipline, leadership,
          and mission-critical problem-solving to software development. Currently pursuing a
          BS in Computer Science with a concentration in Cybersecurity.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="bg-red-700 text-white px-5 py-2 rounded hover:bg-red-800 transition text-sm font-medium"
          >
            View Projects
          </Link>
          <Link
            href="/experience"
            className="border border-red-700 text-red-700 dark:text-red-400 dark:border-red-400 px-5 py-2 rounded hover:bg-red-50 dark:hover:bg-gray-600 transition text-sm font-medium"
          >
            My Experience
          </Link>
          <Link
            href="/contact"
            className="border border-gray-400 text-gray-700 dark:text-gray-300 dark:border-gray-500 px-5 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition text-sm font-medium"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
          <FaAnchor className="text-red-700 text-2xl mb-3" />
          <h2 className="font-semibold text-lg mb-2">Navy Veteran</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Served as a Sonar Technician aboard U.S. Navy submarines. Developed leadership,
            teamwork, and high-stakes decision-making under pressure.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
          <FaShieldAlt className="text-red-700 text-2xl mb-3" />
          <h2 className="font-semibold text-lg mb-2">Cybersecurity Focus</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Concentrating in cybersecurity with coursework in network security, ethical
            hacking, cryptography, and secure software design.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
          <FaCode className="text-red-700 text-2xl mb-3" />
          <h2 className="font-semibold text-lg mb-2">Full-Stack Developer</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Building modern web applications with Next.js, React, TypeScript, MongoDB,
            and Tailwind CSS — from database to deployment.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-red-700 dark:text-red-400 hover:underline text-sm font-medium">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 flex flex-col gap-3"
            >
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-red-700 dark:text-red-400 hover:underline mt-1"
                >
                  <FaGithub /> View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
