import Image from "next/image";

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10 text-center">
          Education &amp; Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Education */}
          <div className="bg-linear-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-8 border-t-4 border-purple-700 shadow-2xl shadow-purple-900/40 transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:shadow-purple-800/80">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/cards/card-1.png"
                alt="Education"
                width={80}
                height={80}
                className="object-contain"
              />
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  B.Tech in Artificial Intelligence and Machine Learning
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  Karunya Institute of Science and Technology
                </p>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-2">
              Expected Graduation: <span className="text-purple-300">2028</span>
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              I&apos;m building a strong foundation in AI, machine learning, and
              intelligent systems, with a focus on applying these concepts to
              real-world problems through projects and hands-on experimentation.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-linear-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-8 border-t-4 border-purple-700 shadow-2xl shadow-purple-900/40 transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:shadow-purple-800/80">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Core Skills
            </h3>
            <p className="text-white/80 text-sm mb-6">
              A blend of analytical thinking and technical expertise to design
              and build intelligent, automated solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Artificial Intelligence", "Machine Learning", "Python", "Problem Solving"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/15 text-sm text-white/90 backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

