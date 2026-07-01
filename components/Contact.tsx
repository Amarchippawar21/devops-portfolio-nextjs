"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_8243fzg",
        "template_oov30qv",
        form.current,
        "qnSa_3jU6gXLASYPQ"
      )
      .then(() => {
        alert("✅ Message Sent Successfully!");
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="bg-slate-950 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>amarchippawar101@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-gray-400">Phone/Whats App</p>
                  <p>+91 9405157316</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p>Wardha, Maharashtra, India</p>
                </div>
              </div>

              <a
                href="https://github.com/Amarchippawar21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-xl font-semibold transition"
              >
                <FaGithub />
                Visit GitHub
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Send Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 rounded-xl transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}