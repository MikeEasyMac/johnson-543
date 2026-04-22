import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  status: "completed" | "in-progress";
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A production-quality personal portfolio built with Next.js 16 (App Router), React 19, TypeScript, and MongoDB/Mongoose for data persistence. Features dark mode via next-themes, a RESTful API layer, and is deployed on Vercel. Demonstrates full-stack architecture with reusable component design.",
    techStack: ["Next.js", "React", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/mikeeasymac/johnson-543",
    liveUrl: null,
    status: "in-progress",
  },
  {
    title: "Network Security Analyzer",
    description:
      "A Python-based network traffic analysis tool that captures live packets using Scapy, identifies suspicious patterns (port scans, ARP spoofing, unusual traffic volume), and generates security reports. Includes a lightweight Flask web interface for visualizing captured traffic.",
    techStack: ["Python", "Scapy", "Flask", "Linux", "Wireshark"],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
  },
  {
    title: "Secure Authentication API",
    description:
      "A full-stack authentication system featuring JWT access/refresh token rotation, bcrypt password hashing, and role-based access control (RBAC). Hardened against CSRF, XSS, and brute-force attacks. Built with Node.js/Express on the backend and React on the frontend.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "React", "TypeScript"],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
  },
  {
    title: "CTF Challenge Write-ups",
    description:
      "An ongoing collection of documented solutions and methodologies for Capture the Flag (CTF) cybersecurity competitions. Covers web exploitation, SQL injection, cryptography, binary reverse engineering, and forensics — demonstrating practical offensive security skills in controlled environments.",
    techStack: ["Python", "Linux", "GDB", "SQL", "Cryptography", "Burp Suite"],
    githubUrl: null,
    liveUrl: null,
    status: "in-progress",
  },
];

const statusStyles = {
  completed: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "in-progress": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
};

const statusLabels = {
  completed: "Completed",
  "in-progress": "In Progress",
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Full-stack web development and cybersecurity projects — built from scratch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 flex flex-col gap-4"
          >
            {/* Title + Status */}
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-bold text-lg leading-snug">{project.title}</h2>
              <span
                className={`text-xs px-2 py-1 rounded shrink-0 font-medium ${statusStyles[project.status]}`}
              >
                {statusLabels[project.status]}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex gap-4 pt-3 border-t border-gray-100 dark:border-gray-600">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-red-700 dark:text-red-400 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-red-700 dark:text-red-400 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
