import { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FIELD_OPTIONS = [
  "Artificial Intelligence & Machine Learning",
  "Data Science & Analytics",
  "Web Development",
  "Mobile Development",
  "Cloud Computing",
  "DevOps & SRE",
  "Cybersecurity",
  "Blockchain & Web3",
  "Internet of Things (IoT)",
  "Embedded Systems",
  "Game Development",
  "AR/VR & Spatial Computing",
];

const FIELD_SPECIALIZATIONS = {
  "Artificial Intelligence & Machine Learning": [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Reinforcement Learning",
    "Explainable AI",
    "Federated Learning",
    "Edge AI",
    "MLOps / AI Ops",
  ],
  "Data Science & Analytics": [
    "Data Analysis",
    "Data Engineering",
    "Big Data",
    "Statistical Modeling",
    "Data Visualization",
    "DataOps",
  ],
  "Web Development": [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
    "Progressive Web Apps (PWA)",
    "Web Performance Optimization",
    "Web Accessibility",
  ],
  "Mobile Development": [
    "iOS Development",
    "Android Development",
    "Cross-Platform",
    "Mobile Game Development",
    "Mobile Performance & Security",
  ],
  "Cloud Computing": [],
  "DevOps & SRE": [
    "CI/CD",
    "Infrastructure as Code",
    "Monitoring & Observability",
    "SRE",
    "GitOps",
    "DevSecOps",
  ],
  Cybersecurity: [
    "Network Security",
    "Application Security",
    "Cloud Security",
    "Incident Response & Forensics",
    "Penetration Testing / Red Teaming",
    "IAM",
    "SOC",
  ],
  "Blockchain & Web3": [
    "Smart Contract Development",
    "DeFi",
    "NFTs & Tokenization",
    "Blockchain Architecture",
    "Consensus Protocols",
  ],
  "Internet of Things (IoT)": [
    "IoT Development & Sensors",
    "IoT Security",
    "Industrial IoT",
    "Edge Computing",
  ],
  "Embedded Systems": [
    "Firmware & RTOS",
    "Embedded AI",
    "Hardware/PCB Design",
    "Real-Time Systems",
  ],
  "Game Development": [
    "2D Game Dev",
    "3D Game Dev",
    "Engine Development",
    "Multiplayer Networking",
    "Game Physics & AI",
  ],
  "AR/VR & Spatial Computing": [
    "Augmented Reality",
    "Virtual Reality",
  ],
};

const SKILL_OPTIONS = [
  "Collaboration",
  "documentation",
  "debugging",
  "Communication",
  "Automation",
  "teamwork",
  "Testing",
  "performance optimization",
  "CI/CD",
  "Monitoring",
  "Security",
  "reporting",
  "problem-solving",
  "performance tuning",
  "stakeholder communication",
  "Scalability",
  "prototyping",
  "API integration",
  "Troubleshooting",
  "optimization",
  "usability testing",
  "critical thinking",
  "data visualization",
  "version control",
  "attention to detail",
  "Infrastructure as Code",
  "Threat modeling",
  "performance profiling",
  "scalability planning",
  "Compliance",
  "risk assessment",
  "anomaly detection",
  "Incident response",
  "profiling",
];


const TOOL_OPTIONS = [
  "Git",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "Tableau",
  "Figma",
  "Unity",
  "Ansible",
  "TensorFlow",
  "Jupyter",
  "Excel",
  "Wireshark",
  "PyTorch",
  "Prometheus",
  "Unreal Engine",
  "Splunk",
  "ROS",
  "Grafana",
  "Power BI",
  "AWS",
  "Postman",
  "VS Code",
  "Jira",
  "Lighthouse",
  "OpenCV",
  "ELK Stack",
  "Chrome DevTools",
  "Blender",
  "Adobe XD",
  "Kafka",
  "Visual Studio",
  "GitHub Actions",
  "Google Analytics",
  "Sketch",
  "Burp Suite",
  "Vault",
  "Azure",
  "Android Studio",
  "REST APIs",
  "ServiceNow",
  "Helm",
  "GitLab CI/CD",
  "Xcode",
  "Redis",
  "Gazebo",
  "npm",
  "MLflow",
  "Webpack",
  "Perforce",
];

const PROGRAMMING_LANGUAGES = [
  "C",
  "C#",
  "C++",
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "R",
  "Go",
  "PHP",
  "Ruby",
  "Swift",
  "Kotlin",
  "Dart",
  "Rust",
  "Scala",
  "MATLAB",
  "Ada",
  "Fortran",
  "Haskell",
  "Erlang",
  "Elixir",
  "Julia",
  "OCaml",
  "Pascal",
  "Prolog",
  "Lua",
  "F#",
  "VB.NET",
  "VBA",
  "MQL4",
  "MQL5",
  "Assembly",
  "Scratch",
  "Apex",
  "PureBasic",
  "Stata",
  "QlikView Script",
  "SAS",
  "Racket",
  "Scheme",
  "Tcl",
  "Mercury",
  "D",
];



const MARKUP_QUERY_CONFIG = [
  "HTML",
  "CSS",
  "JSON",
  "YAML",
  "XML",
  "XAML",
  "GraphQL",
  "SPARQL",
  "SQL",
  "PL/SQL",
  "BPMN",
  "UML",
  "Power Query (M)",
  "Terraform HCL",
  "SAS scripting",
  "Stml",
  "Pig Latin",
  "PostScript",
  "Assembly",
];

const WORK_ENVIRONMENTS = [
  "Research & Innovation Lab",
  "Fast-paced Product Team",
  "Infrastructure & Operations",
  "Security Operations Center",
  "Client-Facing Consulting",
  "Independent Deep Work",
];

const EDUCATION_LEVELS = [
  "Bachelor’s",
   "Master’s",
    "PhD"
  ];



const CERTIFICATION_OPTIONS = [
  "AWS Machine Learning Specialty",
  "TensorFlow Developer",
  "Google ML Engineer",
  "AWS Developer Associate",
  "Meta Front-End Developer",
  "Google Data Engineer",
  "AWS Data Analytics Specialty",
  "Certified Blockchain Developer",
  "Ethereum Developer Certification",
  "CompTIA Security+",
  "ROS Certification",
  "AWS Solutions Architect Associate",
  "CompTIA CySA+",
  "Industrial Robotics Certification",
  "Google UX Design Certificate",
  "Unity VR Developer",
  "Meta AR/VR Developer",
  "Flutter Certification",
  "Azure Administrator Associate",
  "Google Data Analytics Certificate",
  "Microsoft PL-300 Data Analyst",
  "Tableau Certification",
  "Databricks Data Engineer Associate",
  "AZ-220 Azure IoT Developer",
  "Unity Certified Developer",
  "Unreal Engine Developer",
  "NN/g UX Certification",
  "AWS DevOps Engineer Professional",
  "CKA Kubernetes Administrator",
  "DP-100 Azure Data Scientist",
  "Terraform Associate",
  "Cisco IoT Fundamentals",
  "Google Associate Cloud Engineer",
  "NVIDIA CV Certification",
  "Certified Secure Software Lifecycle Professional",
  "AWS Security Specialty",
  "Azure Security Engineer (AZ-500)",
  "CCSP",
  "Google Analytics Certification",
  "Shopify Developer Certification",
  "Magento Developer",
  "CompTIA Network+",
  "Cisco CCNA",
  "CompTIA Server+",
  "Oracle Performance Tuning Expert",
  "Google Certified Educator",
  "NLP Specialization (industry-recognized)",
  "HuggingFace NLP Certificate",
  "AWS ML Specialty",
  "NVIDIA Edge AI Certification",
];


const UNIQUE_TOOL_OPTIONS = Array.from(new Set(TOOL_OPTIONS));
const UNIQUE_SKILL_OPTIONS = Array.from(new Set(SKILL_OPTIONS));
const UNIQUE_CERTIFICATION_OPTIONS = Array.from(
  new Set(CERTIFICATION_OPTIONS)
);

const QUESTION_META = [
  {
    id: "q1",
    step: "STEP 1 — Interests",
    prompt: "Q1. Which of these technology fields interests you the most?",
    helper: "Select the path that you feel the strongest pull toward right now.",
    type: "single",
    options: FIELD_OPTIONS,
  },
  {
    id: "q2",
    step: "STEP 2 — Specialization",
    prompt: "Q2. Choose the specialization that fits that field.",
    helper: "Options will appear after you choose a field.",
    type: "single",
    conditional: true,
  },
  {
    id: "q3",
    step: "STEP 3 — Technical Preferences",
    prompt: "Q3. Which of the following skills do you have? (Multi-select)",
    helper: "Pick every skill that you’re comfortable showcasing in projects.",
    type: "multi",
    options: SKILL_OPTIONS,
  },
  {
    id: "q4",
    step: "STEP 3 — Technical Preferences",
    prompt: "Q4. Which tools or technologies have you used before? (Multi-select)",
    helper: "Highlight the tooling you can be productive in today.",
    type: "multi",
    options: TOOL_OPTIONS,
  },
  {
    id: "q51",
    step: "STEP 3 — Technical Preferences",
    prompt: "Q5.1 Programming Languages (Multi-select)",
    helper: "Mark the languages you can solve problems with confidently.",
    type: "multi",
    options: PROGRAMMING_LANGUAGES,
  },
  {
    id: "q52",
    step: "STEP 3 — Technical Preferences",
    prompt: "Q5.2 Which tools are you confident using? (Multi-select)",
    helper: "Search and select all tools you actively use.",
    type: "multi",
    options: UNIQUE_TOOL_OPTIONS,
  },
  {
    id: "q53",
    step: "STEP 3 — Technical Preferences",
    prompt: "Q5.3 Which technical skills do you have? (Multi-select)",
    helper: "Search and pick all skills that match your current profile.",
    type: "multi",
    options: UNIQUE_SKILL_OPTIONS,
  },
  {
    id: "q7",
    step: "STEP 4 — Work Style & Background",
    prompt: "Q7. What’s your education level?",
    helper: "Search and choose your highest completed education level.",
    type: "single",
    options: EDUCATION_LEVELS,
  },
  {
    id: "q8",
    step: "STEP 4 — Work Style & Background",
    prompt: "Q8. Which certifications do you currently hold? (Multi-select)",
    helper: "Search and select all certifications you already have.",
    type: "multi",
    options: UNIQUE_CERTIFICATION_OPTIONS,
  },
];

const INITIAL_ANSWERS = {
  q1: "",
  q2: "",
  q3: [],
  q4: [],
  q51: [],
  q52: [],
  q53: [],
  q7: "",
  q8: [], 
};

const QUESTION_IDS = QUESTION_META.map((q) => q.id);

export default function Quiz() {
  const navigate = useNavigate();
  const viewportRef = useRef(null);
  const [answers, setAnswers] = useState(INITIAL_ANSWERS);
  const [activeIndex, setActiveIndex] = useState(0);

  const q2Options = useMemo(() => {
    if (!answers.q1) return [];
    return FIELD_SPECIALIZATIONS[answers.q1] ?? [];
  }, [answers.q1]);

  const questionFlow = useMemo(() => {
    return QUESTION_META.map((q) =>
      q.id === "q2"
        ? { ...q, options: q2Options, disabled: !answers.q1 }
        : q
    );
  }, [answers.q1, q2Options]);

  const firstOfStep = useMemo(() => {
    const map = {};
    questionFlow.forEach((q, idx) => {
      if (map[q.step] === undefined) {
        map[q.step] = idx;
      }
    });
    return map;
  }, [questionFlow]);

  const activeQuestion = questionFlow[activeIndex];

  const scrollTop = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToNextQuestion = () => {
    setActiveIndex((prev) => {
      if (prev >= questionFlow.length - 1) {
        submitQuiz();
        return prev;
      }
      return prev + 1;
    });
  };

  const goToPreviousQuestion = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
    scrollTop();
  };

  const handleSingleSelect = (questionIndex, option) => {
    const questionId = QUESTION_IDS[questionIndex];
    setAnswers((prev) => {
      const next = { ...prev, [questionId]: option };
      for (let i = questionIndex + 1; i < QUESTION_IDS.length; i += 1) {
        const key = QUESTION_IDS[i];
        next[key] = Array.isArray(INITIAL_ANSWERS[key]) ? [] : "";
      }
      return next;
    });

    setTimeout(() => {
      scrollTop();
      goToNextQuestion();
    }, 450);
  };

  const handleMultiToggle = (questionIndex, option) => {
    const questionId = QUESTION_IDS[questionIndex];
    setAnswers((prev) => {
      const exists = prev[questionId].includes(option);
      const nextSelection = exists
        ? prev[questionId].filter((item) => item !== option)
        : [...prev[questionId], option];
      const updated = { ...prev, [questionId]: nextSelection };
      for (let i = questionIndex + 1; i < QUESTION_IDS.length; i += 1) {
        const key = QUESTION_IDS[i];
        updated[key] = Array.isArray(INITIAL_ANSWERS[key]) ? [] : "";
      }
      return updated;
    });
  };

  const handleSkipSpecialization = () => {
    const questionIndex = QUESTION_IDS.indexOf("q2");
    setAnswers((prev) => {
      const next = { ...prev, q2: "No specialization needed" };
      for (let i = questionIndex + 1; i < QUESTION_IDS.length; i += 1) {
        const key = QUESTION_IDS[i];
        next[key] = Array.isArray(INITIAL_ANSWERS[key]) ? [] : "";
      }
      return next;
    });
    scrollTop();
    goToNextQuestion();
  };

  const submitQuiz = () => {
    navigate("/results", {
      state: {
        from: "quiz",
        userInput: answers,
      },
    });
  };

  const isMulti = activeQuestion.type === "multi";
  const requiresManualAdvance =
    isMulti || (activeQuestion.id === "q2" && activeQuestion.options.length === 0);

  const hasSelection = Array.isArray(answers[activeQuestion.id])
    ? answers[activeQuestion.id].length > 0
    : Boolean(answers[activeQuestion.id]);

  const progress = Math.round(
    (QUESTION_IDS.filter((id) => {
      const value = answers[id];
      return Array.isArray(value) ? value.length > 0 : Boolean(value);
    }).length /
      QUESTION_IDS.length) *
      100
  );

  const handleContinue = () => {
    if (activeQuestion.id === "q2" && activeQuestion.options.length === 0 && !answers.q2) {
      handleSkipSpecialization();
      return;
    }
    if (activeIndex >= questionFlow.length - 1) {
      submitQuiz();
      return;
    }
    scrollTop();
    goToNextQuestion();
  };

  // الأسئلة اللي تكون Drop-down + بحث
  const isSearchDropdown =
    activeQuestion.id === "q52" ||
    activeQuestion.id === "q53" ||
    activeQuestion.id === "q7" ||
    activeQuestion.id === "q8";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f2d] via-[#14143a] to-[#1a1a3f] text-white">
      <div
        className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-10 py-20 space-y-12 relative"
        ref={viewportRef}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition absolute top-4 left-4 sm:left-0"
        >
          <span className="text-xl">←</span>
          <span className="text-sm font-medium">Back</span>
        </Link>
        <header className="space-y-4 text-center md:text-left pt-16">
          <p className="step-title">Masar quiz</p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Answer one question at a time.
          </h1>
          <p className="text-base text-white/70 max-w-3xl">
            We turn each answer into features for the recommendation engine. Focus on the card in
            front of you and Masar will reveal the next one automatically.
          </p>
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </header>

        <div className="space-y-6">
          {activeIndex === firstOfStep[activeQuestion.step] && (
            <p className="text-center text-sm tracking-[0.4em] uppercase text-white/60">
              {activeQuestion.step}
            </p>
          )}

          <div className="glass-card question-card text-center space-y-6 max-w-3xl mx-auto">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{activeQuestion.prompt}</h2>
              {activeQuestion.helper && (
                <p className="text-sm text-white/70">{activeQuestion.helper}</p>
              )}
            </div>

            {activeQuestion.id === "q2" && !answers.q1 && (
              <p className="text-sm text-white/60">
                Select a field first to reveal specializations.
              </p>
            )}

            {activeQuestion.id === "q2" &&
              answers.q1 &&
              activeQuestion.options.length === 0 && (
                <p className="text-sm text-white/70">
                  No specialization needed for this field. Continue when you’re ready.
                </p>
              )}

            {!(activeQuestion.id === "q2" && activeQuestion.options.length === 0) && (
              isSearchDropdown ? (
                <SearchableSelect
                  options={activeQuestion.options}
                  value={answers[activeQuestion.id]}
                  type={activeQuestion.type}
                  disabled={false}
                  onSelect={(option) =>
                    activeQuestion.type === "multi"
                      ? handleMultiToggle(activeIndex, option)
                      : handleSingleSelect(activeIndex, option)
                  }
                />
              ) : (
                <ChoiceWall
                  options={activeQuestion.options}
                  value={answers[activeQuestion.id]}
                  type={activeQuestion.type}
                  disabled={activeQuestion.id === "q2" && !answers.q1}
                  onSelect={(option) =>
                    activeQuestion.type === "multi"
                      ? handleMultiToggle(activeIndex, option)
                      : handleSingleSelect(activeIndex, option)
                  }
                />
              )
            )}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
              <button
                onClick={goToPreviousQuestion}
                disabled={activeIndex === 0}
                className={`secondary-btn w-full sm:w-auto justify-center flex ${
                  activeIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
                }`}
              >
                Back
              </button>

              {requiresManualAdvance && (
                <button
                  onClick={handleContinue}
                  disabled={
                    !hasSelection &&
                    !(
                      activeQuestion.id === "q2" &&
                      activeQuestion.options.length === 0
                    )
                  }
                  className={`primary-btn w-full sm:w-auto justify-center flex ${
                    !hasSelection &&
                    !(
                      activeQuestion.id === "q2" &&
                      activeQuestion.options.length === 0
                    )
                      ? "opacity-40 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {activeIndex === questionFlow.length - 1 ? "Submit" : "Continue"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchableSelect({ options = [], value, type, disabled, onSelect }) {
  const [query, setQuery] = useState("");

  if (disabled) return null;

  const isMulti = type === "multi";
  const selection = value || (isMulti ? [] : "");

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-3xl mx-auto text-left space-y-3">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={
          isMulti ? "Search & select (Multi-select)" : "Search & select one option"
        }
        className="w-full rounded-lg bg-white/5 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="max-h-64 overflow-y-auto rounded-lg bg-black/30 border border-white/15">
        {filteredOptions.length === 0 ? (
          <p className="text-xs text-white/60 p-3">No matches found.</p>
        ) : (
          filteredOptions.map((option) => {
            const active = isMulti
              ? selection.includes(option)
              : selection === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onSelect(option)}
                className={`w-full text-left px-3 py-2 text-xs sm:text-sm border-b border-white/5 last:border-b-0 transition ${
                  active
                    ? "bg-blue-600/70 text-white"
                    : "bg-transparent hover:bg-white/10 text-white/90"
                }`}
              >
                {option}
              </button>
            );
          })
        )}
      </div>

      {isMulti && selection.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {selection.map((item) => (
            <span
              key={item}
              className="px-2 py-1 rounded-full bg-blue-600/70 text-[11px] sm:text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {!isMulti && selection && (
        <div className="pt-1">
          <span className="px-2 py-1 rounded-full bg-blue-600/70 text-[11px] sm:text-xs">
            {selection}
          </span>
        </div>
      )}
    </div>
  );
}

function ChoiceWall({ options = [], value, onSelect, type, disabled }) {
  if (disabled) {
    return null;
  }

  if (!options.length && type !== "multi") {
    return null;
  }

  const isMulti = type === "multi";
  const selection = value || (isMulti ? [] : "");

  return (
    <div className="flex flex-wrap justify-center md:justify-start lg:justify-center gap-3 sm:gap-4 w-full">
      {options.map((option) => {
        const active = isMulti
          ? selection.includes(option)
          : selection === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`quiz-chip ${active ? "is-active" : ""}`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
