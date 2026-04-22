import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const skills = [
  "Next.js", "React", "TypeScript", "Node.js",
  "MongoDB", "Tailwind CSS", "Python", "Linux",
  "Cybersecurity", "Git",
];

export default function Aside() {
  return (
    <aside className="w-56 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-5 flex flex-col gap-6 shrink-0">
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
          Connect
        </h2>
        <div className="flex flex-col gap-2">
          <a
            href="https://github.com/mikeeasymac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-red-700 dark:hover:text-red-400 transition"
          >
            <FaGithub className="shrink-0" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/michael-johnson"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-red-700 dark:hover:text-red-400 transition"
          >
            <FaLinkedin className="shrink-0" />
            LinkedIn
          </a>
          <a
            href="mailto:michael.johnson@example.com"
            className="flex items-center gap-2 text-sm hover:text-red-700 dark:hover:text-red-400 transition"
          >
            <FaEnvelope className="shrink-0" />
            Email
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
          Skills
        </h2>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 px-2 py-0.5 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
          Open To
        </h2>
        <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 leading-relaxed">
          <li>• Internships</li>
          <li>• Entry-level roles</li>
          <li>• Cybersecurity</li>
          <li>• Full-stack dev</li>
        </ul>
      </div>
    </aside>
  );
}
