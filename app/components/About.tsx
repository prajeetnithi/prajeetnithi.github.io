export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-lg lg:text-xl max-w-4xl mx-auto text-white/80 leading-relaxed">
            I am <span className="text-purple-400 font-semibold">Prajeet Nithi</span>, a B.Tech student
            specializing in{" "}
            <span className="text-purple-300">
              Artificial Intelligence and Machine Learning
            </span>{" "}
            at Karunya Institute of Science and Technology. I am passionate about
            building innovative AI and IoT solutions that solve real-world problems.
            I enjoy working on intelligent systems, automation, and smart technologies,
            and I aspire to become an AI innovator who creates impactful technological
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-linear-to-br from-white/5 to-white/10 border border-white/10 p-6 backdrop-blur-md shadow-lg shadow-purple-900/30 transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/60">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-300 mb-2">
              Focus
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">
              AI &amp; Machine Learning
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Exploring models, data, and intelligent systems that can learn,
              adapt, and solve complex real-world problems.
            </p>
          </div>

          <div className="rounded-2xl bg-linear-to-br from-white/5 to-white/10 border border-white/10 p-6 backdrop-blur-md shadow-lg shadow-purple-900/30 transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/60">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-300 mb-2">
              What I Build
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">
              Smart, Practical Solutions
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Projects like the AI Hackathon Judge that combine AI, automation,
              and user-friendly interfaces to make work more efficient.
            </p>
          </div>

          <div className="rounded-2xl bg-linear-to-br from-white/5 to-white/10 border border-white/10 p-6 backdrop-blur-md shadow-lg shadow-purple-900/30 transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/60">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-300 mb-2">
              Mindset
            </p>
            <h3 className="text-lg font-semibold text-white mb-2">
              Learn, Experiment, Innovate
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              I love turning ideas into prototypes, experimenting with new
              tools, and continuously improving both my technical and problem
              solving skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

