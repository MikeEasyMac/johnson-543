type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
};

const articles: Article[] = [
  {
    slug: "navy-to-tech-transition",
    title: "From Submarine Sonar Tech to Software Developer",
    date: "December 1, 2024",
    category: "Career",
    excerpt:
      "How six years as a U.S. Navy Sonar Technician prepared me for a career in technology — and which skills from the submarine service translate directly to software engineering.",
    readTime: "5 min read",
  },
  {
    slug: "nextjs-portfolio-deep-dive",
    title: "Building a Full-Stack Portfolio with Next.js and MongoDB",
    date: "January 15, 2025",
    category: "Web Development",
    excerpt:
      "A technical deep-dive into building this portfolio: Next.js App Router architecture, MongoDB integration with Mongoose, dark mode with next-themes, and the decisions behind the component structure.",
    readTime: "8 min read",
  },
  {
    slug: "intro-to-ethical-hacking",
    title: "Getting Started with Ethical Hacking: A Practical Guide",
    date: "February 20, 2025",
    category: "Cybersecurity",
    excerpt:
      "An overview of ethical hacking fundamentals — tools like Nmap, Burp Suite, and Metasploit, the mindset required, and how to get hands-on experience legally through CTF competitions.",
    readTime: "6 min read",
  },
  {
    slug: "understanding-jwt-auth",
    title: "JWT Authentication in Modern Web Apps: Pitfalls and Best Practices",
    date: "March 10, 2025",
    category: "Web Development",
    excerpt:
      "A practical breakdown of JSON Web Tokens — how they work, the difference between access and refresh tokens, common implementation mistakes, and how to harden your auth system.",
    readTime: "7 min read",
  },
];

const categoryStyles: Record<string, string> = {
  Career: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  "Web Development": "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  Cybersecurity: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
};

export default function Articles() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Articles</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Thoughts on software development, cybersecurity, and the journey from military service to tech.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="bg-white dark:bg-gray-700 rounded-lg shadow p-6"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span
                className={`text-xs px-2 py-0.5 rounded font-medium ${categoryStyles[article.category]}`}
              >
                {article.category}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{article.date}</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">· {article.readTime}</span>
            </div>
            <h2 className="text-lg font-bold mb-2 leading-snug">{article.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {article.excerpt}
            </p>
            <button
              type="button"
              className="mt-4 text-red-700 dark:text-red-400 hover:underline text-sm font-medium"
            >
              Read more →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
