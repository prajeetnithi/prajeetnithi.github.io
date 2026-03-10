import Link from "next/link";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link
            href="/"
            className="flex flex-col leading-tight text-white hover:text-purple-300 transition-colors transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="text-xl lg:text-2xl font-bold tracking-tight">
              Prajeet Nithi
            </span>
            <span className="text-xs lg:text-sm text-purple-300">
              AI Innovator&nbsp;|&nbsp;AIML Student
            </span>
          </Link>
          <ul className="flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link
                href="#home"
                className="relative text-white/80 hover:text-white text-sm lg:text-base font-medium tracking-wide transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#about"
                className="relative text-white/80 hover:text-white text-sm lg:text-base font-medium tracking-wide transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#lab"
                className="relative text-white/80 hover:text-white text-sm lg:text-base font-medium tracking-wide transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

