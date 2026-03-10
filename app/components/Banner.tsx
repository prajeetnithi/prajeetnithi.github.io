 "use client";

import { useEffect, useState } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["AI Innovator", "AIML Student", "Problem Solver"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(
          () => setDisplayedText(currentText.slice(0, displayedText.length + 1)),
          typingSpeed
        );
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(
          () => setDisplayedText(currentText.slice(0, displayedText.length - 1)),
          typingSpeed
        );
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 lg:pt-32 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-2xl px-6 py-6 lg:px-8 lg:py-8 backdrop-blur-md shadow-xl shadow-purple-900/40 transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-purple-900/80">
            <p className="text-sm lg:text-base uppercase tracking-[0.25em] text-purple-300 mb-3">
              AI Innovator &middot; AIML Student
            </p>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-3">
              Building intelligent systems
              <br />
              for{" "}
              <span className="bg-linear-to-r from-violet-500 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                real-world impact
              </span>
            </h1>
            <p className="text-md lg:text-lg text-white/80 max-w-2xl">
              I design and build AI and IoT solutions that automate workflows,
              enhance decisions, and create smarter experiences for people and
              products.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#lab"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-sm font-medium text-white transition-colors duration-200 shadow-lg shadow-purple-900/50"
              >
                View Projects
                <span className="inline-block text-lg leading-none">↗</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-sm font-medium text-white/90 transition-colors duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4 backdrop-blur-md text-left shadow-md shadow-purple-900/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-purple-900/60">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300 mb-1">
                Focus
              </p>
              <p className="text-sm font-medium text-white">AI &amp; ML Systems</p>
              <p className="text-xs text-white/70 mt-1">
                Models that learn from data and power intelligent products.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4 backdrop-blur-md text-left shadow-md shadow-purple-900/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-purple-900/60">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300 mb-1">
                Toolkit
              </p>
              <p className="text-sm font-medium text-white">Python, ML, GenAI</p>
              <p className="text-xs text-white/70 mt-1">
                Comfortable with modern AI tools and experimentation.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4 backdrop-blur-md text-left shadow-md shadow-purple-900/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-purple-900/60">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300 mb-1">
                Mindset
              </p>
              <p className="text-sm font-medium text-white">Problem Solver</p>
              <p className="text-xs text-white/70 mt-1">
                Turning real-world challenges into thoughtful, automated solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-16 text-center lg:text-left">
          <p className="text-3xl lg:text-4xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>
              I&apos;m a B.Tech student in{" "}
              <span className="text-purple-400 font-semibold">
                Artificial Intelligence and Machine Learning
              </span>{" "}
              at Karunya Institute of Science and Technology.
            </span>
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto lg:mx-0">
            I&apos;m passionate about building innovative AI and IoT solutions that
            solve real-world problems through automation, intelligent decision-making,
            and smart technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

