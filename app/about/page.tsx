import Image from "next/image";
import { FaAnchor, FaGraduationCap, FaShieldAlt } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">About Me</h1>

      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 flex flex-col md:flex-row gap-6 items-start">
        <Image
          src="/AboutMe.JPG"
          alt="Michael Johnson"
          width={240}
          height={240}
          className="rounded-lg shadow object-cover shrink-0"
        />
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Michael Johnson</h2>
            <p className="text-red-700 dark:text-red-400 font-medium mt-1">
              Computer Science Student · U.S. Navy Veteran
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a former U.S. Navy Submariner and Sonar Technician who served with pride before
            transitioning into a career in technology. My military service forged the leadership,
            discipline, and ability to perform under pressure that I bring to every software
            project I tackle.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am currently pursuing a Bachelor&apos;s degree in Computer Science with a concentration
            in Cybersecurity. My technical interests span full-stack web development, secure
            application design, and network security — areas where I can apply both my military
            background and academic training.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am actively seeking internship and entry-level opportunities in cybersecurity and
            software development where I can contribute, grow, and make an impact.
          </p>
        </div>
      </div>

      {/* Background Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
          <FaAnchor className="text-red-700 text-2xl mb-3" />
          <h3 className="font-semibold mb-2">Military Service</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Served as a Sonar Technician (ST) aboard U.S. Navy submarines. Responsibilities
            included acoustic analysis, contact tracking, team leadership, and qualification
            as a Submarine Warfare specialist.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
          <FaGraduationCap className="text-red-700 text-2xl mb-3" />
          <h3 className="font-semibold mb-2">Education</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            BS in Computer Science, Cybersecurity Concentration. Relevant coursework includes
            Network Security, Cryptography, Algorithms, Database Systems, and Web Application
            Development.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
          <FaShieldAlt className="text-red-700 text-2xl mb-3" />
          <h3 className="font-semibold mb-2">Core Values</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Integrity, accountability, and continuous improvement. These values were ingrained
            through military service and guide my approach to software engineering — writing
            secure, reliable, and well-crafted code.
          </p>
        </div>
      </div>
    </div>
  );
}
