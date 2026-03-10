interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "AI Hackathon Judge",
    description:
      "An AI-powered assistant that helps hackathon judges evaluate submissions efficiently. It uses Google Gemini to analyze the project description, screenshot, and PDF, then scores innovation and technical execution while generating constructive feedback.",
    link: "https://github.com/prajeetnithi/AI-Hackathon-Judge-Assistant.git",
  },
  {
    id: 2,
    title: "AI Study Assistant",
    description:
      "A full-stack Next.js dashboard that connects to Google Classroom using Google OAuth 2.0 and Google Gemini. It reads course content (via Classroom read-only scopes) so students can summarize materials, chat with an AI tutor, and generate quizzes from their assignments.",
    link: "https://github.com/prajeetnithi/ai-study-assistant?tab=readme-ov-file#ai-study-assistant",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <p className="text-purple-400 text-xs lg:text-sm font-medium uppercase tracking-[0.25em] mb-8 text-center">
          Featured Projects
        </p>
        {featuredProjects.map((project) => {
          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className="relative flex justify-center">
                <div className="w-full max-w-3xl bg-linear-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-white/10 shadow-2xl shadow-purple-900/40 transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:shadow-purple-900/80">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group"
                  >
                    <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-purple-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    >
                      <path d="M7 17L17 7" />
                      <polyline points="8 7 17 7 17 16" />
                    </svg>
                  </a>
                  <p className="text-white/90 text-base lg:text-lg leading-relaxed mt-4">
                    {project.description}
                  </p>
                  {project.link && (
                    <div className="mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/40 text-sm font-medium text-white transition-colors"
                      >
                        View Repository
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <path d="M7 17L17 7" />
                          <polyline points="8 7 17 7 17 16" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

