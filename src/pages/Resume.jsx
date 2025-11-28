import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  function handleFileChange(e) {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  }

  function handleSubmit() {
    if (!file) {
      alert("Please upload a resume first.");
      return;
    }

    navigate("/results", {
      state: {
        from: "resume",
        fileName: file.name,
      },
    });
  }

  return (
    <div className="page-shell">
      <div className="page-content">
        <header className="space-y-4 text-center md:text-left">
          <p className="step-title">Step-free upload</p>
          <h1 className="text-[clamp(2.25rem,5vw,3.25rem)] font-semibold text-white">
            Upload your resume.
          </h1>
          <p className="text-[clamp(1rem,2.2vw,1.15rem)] text-white/70 max-w-2xl mx-auto md:mx-0">
            We extract skills, tools, certifications, and education directly from your document and
            map them to Masar’s recommendation graph. Everything stays on-device until you submit.
          </p>
        </header>

        <section className="glass-card space-y-8">
          <label
            className="block w-full rounded-[32px] border border-dashed border-white/20 bg-white/5 px-6 py-16 text-center cursor-pointer transition hover:border-white/50"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-white/10 border border-white/20 shadow-lg shadow-indigo-900/40 text-3xl">
                📄
              </div>
              <div className="space-y-1">
                <p className="text-[clamp(1.1rem,2.5vw,1.35rem)] font-semibold text-white">
                  Click to upload your resume
                </p>
                <p className="text-sm text-white/60">PDF, DOC, or DOCX — max 5 MB</p>
              </div>
            </div>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {file && (
            <div className="rounded-2xl bg-white/5 border border-white/15 px-5 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-white/80">
                <span className="font-semibold text-white">Selected:</span> {file.name}
              </div>
              <button
                onClick={() => setFile(null)}
                className="text-xs text-white/60 hover:text-rose-300 transition"
              >
                Remove
              </button>
            </div>
          )}

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/60 max-w-md">
              Masar’s parser → features → ML model. You’ll see transparent scoring and reasons on
              the next screen.
            </p>
            <button onClick={handleSubmit} className="primary-btn">
              Analyze Resume
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
