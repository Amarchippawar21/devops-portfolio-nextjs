import AnimatedSection from "./AnimatedSection";
import { FaCogs } from "react-icons/fa";

export default function About() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="bg-slate-900 text-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-5xl font-bold text-center mb-16">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left Side */}
            <div>
              <h3 className="text-3xl font-semibold mb-6">
                DevOps Engineer
              </h3>

              <p className="text-gray-300 leading-8">
                I am an Electronics and Telecommunication Engineering graduate
                with a strong passion for DevOps, Cloud Computing, Automation,
                and Infrastructure as Code. I enjoy building scalable and
                reliable infrastructure using Docker, Kubernetes, Jenkins,
                Terraform, AWS, and Linux.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="bg-slate-800 p-5 rounded-xl text-center">
                  <h4 className="text-cyan-400 text-3xl font-bold">10+</h4>
                  <p className="text-gray-400 mt-2">DevOps Projects</p>
                </div>

                <div className="bg-slate-800 p-5 rounded-xl text-center">
                  <h4 className="text-cyan-400 text-3xl font-bold">15+</h4>
                  <p className="text-gray-400 mt-2">Technologies</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center">
              <div className="relative group">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

                {/* Circle */}
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-700 shadow-[0_0_60px_rgba(34,211,238,0.45)] flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-105">

                  <FaCogs className="text-white text-8xl mb-6 animate-spin" />

                  <h2 className="text-3xl font-extrabold tracking-widest text-white">
                    DEVOPS
                  </h2>

                  <p className="mt-5 px-6 text-center text-lg font-semibold tracking-wider text-cyan-100">
                    BUILD • AUTOMATE • DEPLOY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}