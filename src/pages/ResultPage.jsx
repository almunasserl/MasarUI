import { useLocation, useNavigate } from "react-router-dom";

export default function ResultPage() {
  const { state } = useLocation() || {};
  const navigate = useNavigate();

  const sampleRecommendations = [
    {
      role: "Data Analyst",
      score: 91,
      reason: "Strong analytical signals with Python + SQL execution.",
      skills: ["Python", "SQL", "Data Cleaning", "Excel"],
    },
    {
      role: "Frontend Developer",
      score: 84,
      reason: "Modern UI stack experience mapped to responsive work.",
      skills: ["JavaScript", "React", "CSS"],
    },
    {
      role: "Machine Learning Engineer",
      score: 78,
      reason: "ML fundamentals plus TensorFlow workflows detected.",
      skills: ["Python", "ML Basics", "TensorFlow"],
    },
  ];

  return (
    <div className="page-shell">
      <div className="page-content max-w-6xl">
        <header className="space-y-3 text-center md:text-left">
          <p className="step-title">Masar results</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Your personalized tech paths</h1>
          {state?.from === "resume" ? (
            <p className="text-base text-white/70">
              Resume analyzed: <span className="font-semibold text-white">{state.fileName}</span>
            </p>
          ) : (
            <p className="text-base text-white/70 max-w-2xl">
              Based on your quiz inputs, these are the strongest matches from Masar’s recommendation model.
            </p>
          )}
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleRecommendations.map((rec) => (
            <div
              key={rec.role}
              className="glass-card h-full min-h-[280px] flex flex-col items-center text-center gap-4 justify-between"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                  <h2 className="text-[clamp(1.2rem,2.2vw,1.5rem)] font-semibold text-white">
                    {rec.role}
                  </h2>
                  <span className="px-3 py-1 rounded-2xl bg-white/10 border border-white/15 text-[clamp(0.85rem,1.4vw,0.95rem)] font-medium text-white/90">
                    {rec.score}%
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {rec.skills.map((skill) => (
                    <span key={skill} className="tag text-center text-xs sm:text-sm px-2.5 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="glass-card space-y-5">
          <h3 className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-semibold text-white">
            Why these recommendations?
          </h3>
          <p className="text-[clamp(0.95rem,1.9vw,1.05rem)] text-white/70 max-w-3xl">
            Your inputs are transformed into Masar features—skills, stacks, work style, education. We
            compare against high-performing tech professionals to surface the closest fit.
          </p>
          <ul className="text-[clamp(0.95rem,1.8vw,1.05rem)] text-white/70 space-y-2">
            <li>• Feature importance highlights what influenced each match.</li>
            <li>• Similarity scoring compares your inputs with real-world role profiles.</li>
            <li>• Stacked ranking keeps the most confident path at the very top.</li>
          </ul>
        </section>

        <div className="flex flex-wrap items-center justify-end gap-4">
          <button onClick={() => navigate("/quiz")} className="secondary-btn">
            Retake Quiz
          </button>
          <button onClick={() => navigate("/resume")} className="primary-btn">
            Upload Another Resume
          </button>
        </div>
      </div>
    </div>
  );
}
