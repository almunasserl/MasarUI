import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0F1020] via-[#121533] to-[#1B0F30] px-4 sm:px-6 lg:px-12 pt-20 pb-16 flex flex-col items-center gap-10">
      {/* Decorative Glows */}
      <div className="absolute top-20 left-10 w-56 h-56 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-[45%] left-[40%] w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>

      <div className="relative w-full max-w-screen-2xl">
        <div className="relative z-20 flex flex-col items-center text-center md:items-start md:text-left max-w-3xl mx-auto md:mx-0 md:ml-6 space-y-6">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.5em] text-white/70 uppercase">
              Masar · Tech Career Guide
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,3.8rem)] font-semibold leading-tight text-white mt-3">
              Discover the tech path that fits{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                your journey.
              </span>
            </h1>
          </div>

          <p className="text-white/70 text-[clamp(1rem,2.2vw,1.15rem)] max-w-2xl">
            Masar helps tech students choose their future career path with clarity. Upload your resume
            or answer a short quiz, and let Masar guide you toward the tech roles that match your
            skills, tools, and interests.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 text-white/70 w-full max-w-xl">
            <Link to="/quiz" className="w-full sm:w-auto">
              <button className="primary-btn w-full text-base md:text-lg">Take the quiz</button>
            </Link>
            <span className="text-center uppercase tracking-[0.4em] text-xs">or</span>
            <Link to="/resume" className="w-full sm:w-auto">
              <button className="secondary-btn w-full text-base md:text-lg">Upload your resume</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
