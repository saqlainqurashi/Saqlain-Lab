// Portfolio content is separated from presentation so it is easy to update.
export const projects = [
  {
    id: "01",
    title: "Collect360",
    type: "Enterprise / Banking",
    group: "Enterprise AI",
    status: "Enterprise project",
    period: "2026",
    headline: "Engineering a smarter collections ecosystem.",
    description: "Collection management workflows for loan repayments, delinquency, follow-ups, Promise to Pay, hardship assessment and recovery escalation.",
    contribution: "Designed and developed core workflows and microservices-oriented system architecture.",
    stack: ["Python", "FastAPI", "Kafka", "PostgreSQL", "Memgraph", "AWS"],
    url: "https://github.com/saqlainqurashi/CMS",
    tone: "cyan",
    symbol: "network",
    notes: ["Customer and account collection journeys", "Event-driven recovery workflows and case handling", "API security and role-based access design"]
  },
  {
    id: "02",
    title: "GenInsuredAI",
    type: "Enterprise / Insurtech",
    group: "Enterprise AI",
    status: "Enterprise project",
    period: "2026",
    headline: "Connecting the entire insurance lifecycle.",
    description: "An AI-powered platform supporting lead acquisition, underwriting, policy issuance, management and customer servicing.",
    contribution: "Contributed to intelligent workflows for underwriting, risk assessment and policy servicing.",
    stack: ["Python", "FastAPI", "Kafka", "PostgreSQL", "AWS"],
    url: "https://github.com/saqlainqurashi/getinsuredai",
    tone: "violet",
    symbol: "shield",
    notes: ["End-to-end policy workflow design", "Intelligent risk assessment support", "Microservices and secure API integrations"]
  },
  {
    id: "03",
    title: "KnowledgeForge AI",
    type: "Independent / GenAI",
    group: "GenAI & RAG",
    status: "Personal project",
    period: "2026",
    headline: "Turning documents into useful answers.",
    description: "A retrieval-augmented knowledge platform that ingests documents, generates embeddings and answers grounded questions with source references.",
    contribution: "Built the RAG pipeline, vector search, application interface and CI/CD workflow.",
    stack: ["RAG", "FastAPI", "pgvector", "Gemini", "GitHub Actions", "AWS"],
    url: "https://github.com/saqlainqurashi/KnowledgeForge-AI",
    tone: "blue",
    symbol: "brain",
    notes: ["Document processing and semantic retrieval", "Vector embeddings with PostgreSQL / pgvector", "Automated tests and deployment workflow"]
  },
  {
    id: "04",
    title: "AI Voice Agent",
    type: "Independent / Conversational AI",
    group: "Automation",
    status: "Personal project",
    period: "2025",
    headline: "A voice interface that can take action.",
    description: "A real-estate voice agent for inbound and outbound calls, FAQs, calendar bookings and human-agent handoff.",
    contribution: "Designed voice automation flows and service integrations.",
    stack: ["Retell AI", "n8n", "LLMs", "Google Calendar", "Webhooks"],
    url: "https://github.com/saqlainqurashi/n8n-AI-calling-agent",
    tone: "peach",
    symbol: "audio",
    notes: ["Conversational call handling", "Appointment scheduling via calendar API", "Escalation and workflow automation"]
  },
  {
    id: "05",
    title: "SupportPilot AI",
    type: "Independent / Full-stack",
    group: "Automation",
    status: "Personal project",
    period: "2026",
    headline: "Support operations, built as a system.",
    description: "A multi-role support platform with ticket assignment, messaging, status tracking, priority management and secure authentication.",
    contribution: "Built the FastAPI backend, React dashboards, RBAC and deployed application.",
    stack: ["React", "FastAPI", "PostgreSQL", "JWT", "Vercel", "Render"],
    url: "https://github.com/saqlainqurashi/SupportPilot-AI",
    tone: "green",
    symbol: "workflow",
    notes: ["Admin, support-agent and customer flows", "Authentication and role-based access controls", "Ticket lifecycle and deployment"]
  },
  {
    id: "06",
    title: "Smart Parking",
    type: "Independent / Computer Vision",
    group: "Computer Vision",
    status: "Personal project",
    period: "2023",
    headline: "Making physical spaces more intelligent.",
    description: "Camera-based parking detection with live occupancy monitoring, reservation capabilities and administrative management.",
    contribution: "Developed computer-vision functionality and supporting application flows.",
    stack: ["YOLO", "OpenCV", "TensorFlow", "React", "FastAPI"],
    url: "https://github.com/saqlainqurashi/AI-Powered-Smart-Parking-System",
    tone: "yellow",
    symbol: "scan",
    notes: ["Real-time parking-space detection", "User availability and reservation interface", "Admin monitoring and management"]
  },
  {
    id: "07",
    title: "CloudDesk AI",
    type: "Independent / Document AI",
    group: "GenAI & RAG",
    status: "Personal project",
    period: "2026",
    headline: "A cloud workspace for intelligent documents.",
    description: "A document manager with secure cloud file storage and AI-powered text extraction and summarization.",
    contribution: "Built file uploads, metadata storage, summarization and a full-stack interface.",
    stack: ["React", "FastAPI", "PostgreSQL", "S3", "Gemini", "Docker"],
    url: "https://github.com/saqlainqurashi/CloudDesk-AI",
    tone: "rose",
    symbol: "database",
    notes: ["Private AWS S3 file storage", "Document content processing and AI summaries", "Docker-based local workflow"]
  }
];

export const experience = [
  {
    role: "Senior AI/ML Engineer",
    company: "Rizviz International",
    period: "Sep 2026 — Present",
    summary: "Engineering enterprise platforms including Collect360 and GenInsuredAI, with a focus on workflows, scalable services and AI-driven operations."
  },
  {
    role: "Lead AI & Automation Engineer",
    company: "Systematic IT Solutions",
    period: "Jun 2025 — Aug 2026",
    summary: "Built intelligent chatbots, OpenAI integrations and n8n automation pipelines to simplify business processes."
  },
  {
    role: "AI Developer & Instructor",
    company: "Robotronics Pakistan",
    period: "Feb 2024 — Mar 2025",
    summary: "Developed machine-learning and computer-vision applications, while teaching applied AI concepts."
  },
  {
    role: "AI/ML Engineer",
    company: "Cognizant · Remote",
    period: "Jul 2024 — Dec 2024",
    summary: "Built AI-driven solutions across computer vision, sentiment analysis and recommendation systems."
  },
  {
    role: "AI/ML Engineer",
    company: "Inxol Technologies",
    period: "Dec 2022 — Dec 2023",
    summary: "Researched, trained and implemented machine-learning models for practical use cases."
  }
];

export const skillGroups = [
  {
    number: "01",
    title: "Intelligence",
    subtitle: "Models & reasoning",
    skills: ["Generative AI", "LLMs", "RAG", "Transformers", "PyTorch", "TensorFlow", "Computer Vision"]
  },
  {
    number: "02",
    title: "Orchestration",
    subtitle: "Agents & automation",
    skills: ["LangChain", "LangGraph", "MCP", "n8n", "Prompt Engineering", "REST APIs"]
  },
  {
    number: "03",
    title: "Engineering",
    subtitle: "Applications & systems",
    skills: ["Python", "FastAPI", "React", "PostgreSQL", "Kafka", "Microservices", "System Design"]
  },
  {
    number: "04",
    title: "Infrastructure",
    subtitle: "Cloud & delivery",
    skills: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Kubernetes", "MLOps", "JWT / RBAC"]
  }
];
