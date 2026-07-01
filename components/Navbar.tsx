export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">

      <nav className="bg-slate-900/70 backdrop-blur-xl border border-cyan-500/30 rounded-full px-8 py-3 shadow-[0_0_25px_rgba(34,211,238,0.25)]">

        <ul className="flex items-center gap-8 text-gray-300 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#certificates"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all duration-300"
            >
              Certificates
            </a>
          </li>

          <li>
            <a
              href="#github"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all duration-300"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_#22d3ee] transition-all duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </nav>

    </header>
  );
}