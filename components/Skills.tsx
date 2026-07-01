export default function Skills() {
  const skillCategories = [
    {
      title: "🐧 DevOps",
      skills: [
        "Linux",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Terraform",
        "Ansible",
        "Git",
        "GitHub",
        "CI/CD",
        "Prometheus",
        "Grafana",
        "Nginx",
      ],
    },
    {
      title: "☁️ Cloud",
      skills: [
        "AWS EC2",
        "AWS IAM",
        "AWS VPC",
        "AWS S3",
        "AWS ECR",
        "CloudWatch",
      ],
    },
    {
      title: "🛡️ Cyber Security",
  skills: [
    "Cyber Security",
    "Networking (TCP/IP)",
    "IP Addressing",
    "Subnetting",
    "Static Routing",
    "Inter-VLAN Routing",
    "VLAN",
    "Trunking",
    "Port Security",
    "ACL (Access Control Lists)",
    "Network Security",
    "Cisco Packet Tracer",
    "Wireshark",
    "Kali Linux",
    "Nmap",
    "OWASP Top 10",
    "Vulnerability Assessment",
    "Operating Systems (Windows & Linux)",
      ],
    },
    {
      title: "💻 Programming",
      skills: [
        "Python",
        "Bash",
        "Shell Scripting",
        "YAML",
        "JSON",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300"
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700 hover:bg-cyan-500 hover:text-black transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}