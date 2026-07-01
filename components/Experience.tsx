export default function Experience() {
  const timeline = [
    {
      year: "2021",
      title: "B.E. Electronics & Telecommunication",
      desc: "Graduated with a strong foundation in networking, operating systems and software development.",
    },
    {
      year: "2023",
      title: "Linux & Networking",
      desc: "Learned Linux administration, shell scripting, TCP/IP, VLANs, Routing and Network Security.",
    },
    {
      year: "2024",
      title: "DevOps Journey",
      desc: "Hands-on with Git, Docker, Kubernetes, Jenkins, Terraform and AWS.",
    },
    {
      year: "2025",
      title: "Cyber Security",
      desc: "Worked with Kali Linux, Wireshark, Nmap, OWASP Top 10 and Vulnerability Assessment.",
    },
    {
      year: "2026",
      title: "DevOps Projects",
      desc: "Built CI/CD pipelines, Kubernetes deployments, AWS Infrastructure and Monitoring projects.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Journey</span>
        </h2>

        <div className="relative border-l-4 border-cyan-500 ml-5">

          {timeline.map((item, index) => (
            <div key={index} className="mb-12 ml-8">

              <div className="absolute -left-[14px] w-6 h-6 bg-cyan-400 rounded-full border-4 border-slate-950"></div>

              <span className="text-cyan-400 font-bold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}