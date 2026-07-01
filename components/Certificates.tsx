export default function Certificates() {
  const certificates = [
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "30 Mar 2026",
      pdf: "/certificates/networking-basics.pdf",
    },
    {
      title: "Networking Devices & Initial Configuration",
      issuer: "Cisco Networking Academy",
      date: "31 Mar 2026",
      pdf: "/certificates/networking-devices.pdf",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "30 Mar 2026",
      pdf: "/certificates/intro-cybersecurity.pdf",
    },
    {
      title: "Junior Cybersecurity Analyst",
      issuer: "Cisco Networking Academy",
      date: "31 Mar 2026",
      pdf: "/certificates/junior-cybersecurity.pdf",
    },
    {
      title: "Introduction to IoT & Digital Transformation",
      issuer: "Cisco Networking Academy",
      date: "30 Mar 2026",
      pdf: "/certificates/intro-iot.pdf",
    },
    {
      title: "Trust & Security with Google Cloud",
      issuer: "Google Cloud",
      date: "27 Mar 2026",
      pdf: "/certificates/google-cloud.pdf",
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "27 Mar 2026",
      pdf: "/certificates/data-analytics.pdf",
    },
  ];

  return (
    <section
      id="certificates"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Certificates</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="bg-slate-950 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-3xl">
                🏆
              </div>

              <h3 className="text-xl font-bold mt-6">
                {cert.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {cert.issuer}
              </p>

              <p className="text-cyan-400 text-sm mt-1">
                {cert.date}
              </p>

              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-center bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 rounded-lg transition"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}