import { FaAnchor, FaGraduationCap } from "react-icons/fa";
import { ReactNode } from "react";

type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  highlights: string[];
  icon: ReactNode;
};

const experiences: ExperienceEntry[] = [
  {
    title: "Sonar Technician (ST)",
    org: "U.S. Navy – Submarine Service",
    period: "2016 – 2022",
    highlights: [
      "Operated and maintained advanced submarine sonar systems in complex underwater environments",
      "Analyzed acoustic signatures to identify, classify, and track underwater contacts",
      "Led and mentored a team of junior technicians; responsible for training and performance evaluations",
      "Maintained a Secret security clearance throughout service",
      "Qualified in submarines and earned the Submarine Warfare Insignia (Dolphins)",
      "Deployed on multiple extended patrols, demonstrating adaptability and focus under sustained pressure",
    ],
    icon: <FaAnchor />,
  },
  {
    title: "BS Computer Science – Cybersecurity Concentration",
    org: "University",
    period: "2022 – Present",
    highlights: [
      "Maintaining a strong GPA with a focus on cybersecurity and full-stack software engineering",
      "Relevant coursework: Network Security, Cryptography, Web Application Development, Database Systems, Algorithms",
      "Completed CSC 543 – Web Application Development (Next.js, React, MongoDB)",
      "Actively participating in Cybersecurity Club and CTF competitions",
      "Veteran student leveraging GI Bill benefits",
    ],
    icon: <FaGraduationCap />,
  },
];

const skillCategories: Record<string, string[]> = {
  Languages: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL", "Bash/Shell"],
  "Web Development": ["Next.js", "React", "Node.js", "Express", "HTML5", "CSS3", "Tailwind CSS", "REST APIs"],
  "Database & Cloud": ["MongoDB", "Mongoose", "PostgreSQL", "Vercel", "AWS (basics)"],
  "Security & Tools": ["Linux", "Wireshark", "Nmap", "Metasploit (lab)", "Git", "VS Code", "Network Analysis"],
};

export default function Experience() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Experience</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Military service, education, and the technical skills I bring to the table.
        </p>
      </div>

      {/* Timeline */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Work &amp; Education</h2>
        <div className="flex flex-col gap-5">
          {experiences.map((entry, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 flex gap-4"
            >
              <div className="text-red-700 dark:text-red-400 text-2xl mt-1 shrink-0">
                {entry.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-bold text-lg leading-snug">{entry.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 shrink-0">
                    {entry.period}
                  </span>
                </div>
                <p className="text-red-700 dark:text-red-400 text-sm font-medium mb-3">
                  {entry.org}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 leading-relaxed">
                  {entry.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-700 rounded-lg shadow p-5"
            >
              <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">{category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 px-2 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
