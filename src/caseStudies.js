// Public-facing case studies use simplified, conceptual workflows.
// Do not present these diagrams as internal production architecture.
export const caseStudies = {
  "01": {
    industry: "Banking operations",
    challenge: "Collections teams need a coordinated way to manage overdue accounts, repayment commitments, hardship cases and recovery escalations.",
    solution: "Model the loan recovery journey as a set of role-aware collection services and case workflows, with event-driven updates and an auditable case lifecycle.",
    contribution: "Designed and developed Collection Management System workflows and microservices-oriented architecture, including delinquency, Promise to Pay and escalation paths.",
    outcome: "A structured case-management approach spanning follow-ups, repayment arrangements, hardship assessment and recovery handoffs.",
    focus: ["Event-driven case handling", "JWT / OAuth 2.0 and RBAC", "Promise to Pay and hardship workflows"],
    flow: [
      {name: "Banking inputs", short: "Account events", detail: "Upstream loan, repayment and delinquency information initiates collection activity through the integration layer."},
      {name: "API & access", short: "Secure entry", detail: "API Gateway and role-based access govern collection agents, supervisors and specialist workflows."},
      {name: "Collection services", short: "Case lifecycle", detail: "Services coordinate assignments, account follow-ups, Promise to Pay and repayment arrangements."},
      {name: "Event backbone", short: "Kafka", detail: "Asynchronous events support coordination between delinquency and collection workflows."},
      {name: "Data & operations", short: "Case state", detail: "PostgreSQL and related data services support case records; Memgraph supports connected data modeling."}
    ],
    supporting: ["FastAPI", "PostgreSQL", "Apache Kafka", "Memgraph", "AWS S3 / SES"],
    disclaimer: "Conceptual public overview based on the project description. It omits internal bank integrations, business rules and deployment details."
  },
  "02": {
    industry: "Insurance automation",
    challenge: "Insurance policy journeys often span disconnected steps, from lead capture and risk assessment to underwriting and servicing.",
    solution: "Coordinate the policy lifecycle with secure APIs, event-driven services and intelligent underwriting and servicing workflows.",
    contribution: "Contributed to the platform’s insurance workflow design, including risk-assessment, underwriting and policy-servicing automation.",
    outcome: "An integrated approach to policy lifecycle automation designed to reduce manual handoffs.",
    focus: ["Insurance workflow orchestration", "Underwriting automation", "Secure API services"],
    flow: [
      {name: "Lead intake", short: "Acquisition", detail: "Policy journeys begin with lead capture and customer intake."},
      {name: "Risk assessment", short: "Evaluation", detail: "Intelligent workflows help collect and evaluate inputs relevant to underwriting."},
      {name: "Underwriting", short: "Decision flow", detail: "Automated underwriting steps coordinate decisions and policy processing."},
      {name: "Policy services", short: "Lifecycle", detail: "Policy issuance, management and post-policy servicing are part of the end-to-end flow."},
      {name: "Shared platform", short: "APIs & events", detail: "FastAPI, PostgreSQL and Kafka support the modeled microservices platform."}
    ],
    supporting: ["FastAPI", "PostgreSQL", "Kafka", "JWT / RBAC", "AWS"],
    disclaimer: "Illustrative high-level workflow, not an internal insurer architecture diagram or statement of autonomous underwriting decisions."
  },
  "03": {
    industry: "Retrieval-augmented generation",
    challenge: "General-purpose language models do not automatically know the content of a user's private documents or provide traceable sources.",
    solution: "Build a document ingestion and retrieval pipeline that uses embeddings and vector search to supply relevant context to the answer model.",
    contribution: "Built the FastAPI ingestion APIs, text chunking, embeddings, pgvector search, Gemini answer generation, React interface and CI/CD.",
    outcome: "A working knowledge-base assistant that accepts documents and returns context-grounded answers with source snippets.",
    focus: ["384-dimensional embeddings", "pgvector semantic retrieval", "Tested CI/CD deployment workflow"],
    flow: [
      {name: "Upload", short: "PDF / TXT", detail: "FastAPI accepts documents and extracts their text before processing."},
      {name: "Chunk & embed", short: "MiniLM", detail: "Content is chunked with overlap; Sentence Transformers generates 384-dimensional embeddings."},
      {name: "Vector storage", short: "Neon pgvector", detail: "Document metadata, chunks and vectors are persisted in PostgreSQL with pgvector."},
      {name: "Retrieve", short: "Similarity", detail: "A question is embedded and relevant document chunks are selected by vector similarity."},
      {name: "Answer", short: "Gemini + sources", detail: "The Gemini model receives the retrieved context and returns an answer with source references."}
    ],
    supporting: ["FastAPI", "Sentence Transformers", "Neon PostgreSQL", "Gemini", "GitHub Actions"],
    disclaimer: "Simplified two-path RAG lifecycle: document ingestion and question answering are separate requests."
  },
  "04": {
    industry: "Conversational automation",
    challenge: "Real estate teams need to respond to inquiries and coordinate appointments without manually handling every routine call.",
    solution: "Combine an AI voice interface with automations that can answer questions, book calendar meetings and route complex conversations to people.",
    contribution: "Designed the voice-agent flow, automation integrations and appointment and transfer behaviors.",
    outcome: "An AI voice agent capable of inbound and outbound conversations, scheduling and human handoff.",
    focus: ["Real-time voice conversations", "n8n automation workflows", "Calendar integration & handoff"],
    flow: [
      {name: "Voice call", short: "Inbound / outbound", detail: "A customer call is initiated or answered by the AI voice system."},
      {name: "Conversation", short: "Retell AI", detail: "The voice agent handles customer inquiries through conversational AI."},
      {name: "Automation", short: "n8n", detail: "Workflow logic coordinates actions and integrations based on the conversation."},
      {name: "Calendar", short: "Scheduling", detail: "Google Calendar API supports appointment creation."},
      {name: "Handoff", short: "Human agent", detail: "Calls can be transferred to a human when a conversation requires escalation."}
    ],
    supporting: ["Retell AI", "n8n", "LLMs", "Webhooks", "Google Calendar"],
    disclaimer: "Conceptual integration flow; actual call behavior depends on configuration and connected services."
  },
  "05": {
    industry: "Support operations",
    challenge: "Customer support workflows need distinct roles, secure ticket access and a consistent place to manage conversations and assignments.",
    solution: "Build a full-stack ticketing application with customer, agent and admin workspaces, protected FastAPI endpoints and persistent conversations.",
    contribution: "Built the React role dashboards, FastAPI API, JWT authentication, role-based access control, SQLAlchemy models and cloud deployment.",
    outcome: "A deployed multi-role support workspace supporting tickets, messages, statuses, priorities and assignments.",
    focus: ["Three role-based workspaces", "JWT authentication & RBAC", "FastAPI with Neon PostgreSQL"],
    flow: [
      {name: "React portals", short: "3 user roles", detail: "Customers, agents and admins interact with their respective interfaces."},
      {name: "Authentication", short: "JWT / RBAC", detail: "FastAPI checks authenticated identity and role requirements for protected actions."},
      {name: "Ticket API", short: "Lifecycle", detail: "Services handle tickets, messages, assignment, status and priority changes."},
      {name: "Persistence", short: "Neon database", detail: "SQLAlchemy models persist ticket records, users and conversation messages."},
      {name: "Cloud delivery", short: "Vercel / Render", detail: "Frontend is hosted on Vercel and API on Render, with Neon PostgreSQL."}
    ],
    supporting: ["React", "FastAPI", "SQLAlchemy", "Neon", "Vercel / Render"],
    disclaimer: "Based on the documented application and deployment architecture."
  },
  "06": {
    industry: "Computer vision",
    challenge: "Drivers and parking operators lack immediate visibility into vacant, occupied and incorrectly parked spaces.",
    solution: "Use camera-based computer vision to update parking occupancy and expose availability and booking functions to users and administrators.",
    contribution: "Developed the parking-space recognition workflow and integrated it with the user and operations interfaces.",
    outcome: "A smart-parking workflow covering space detection, live availability, reservations and admin oversight.",
    focus: ["YOLO and OpenCV", "Real-time occupancy state", "Booking and admin interfaces"],
    flow: [
      {name: "Camera feed", short: "Video input", detail: "Parking-area cameras provide the visual input used to inspect parking spaces."},
      {name: "Vision model", short: "YOLO / OpenCV", detail: "Computer-vision processing identifies occupied, available and incorrectly parked spaces."},
      {name: "State service", short: "FastAPI", detail: "Detection output is exposed to the application through API services and updates."},
      {name: "User app", short: "Availability", detail: "Users view availability and reserve spaces for time slots."},
      {name: "Admin console", short: "Operations", detail: "Web-based administration supports bookings and parking management."}
    ],
    supporting: ["TensorFlow", "YOLO", "OpenCV", "FastAPI", "React"],
    disclaimer: "Simplified architecture based on the project description; monitoring and reservations are illustrated conceptually."
  },
  "07": {
    industry: "Document intelligence",
    challenge: "Teams need a simple way to manage stored documents while extracting and understanding their contents.",
    solution: "Pair a React document workspace with a FastAPI service, private S3 file storage, PostgreSQL metadata and Gemini-powered summarization and document Q&A.",
    contribution: "Built uploads, document processing and storage, summary and question-answering endpoints and the frontend workspace.",
    outcome: "A local Docker-based full-stack document workspace with cloud object storage and AI features.",
    focus: ["Private S3 objects", "Document extraction and summaries", "Gemini-powered document Q&A"],
    flow: [
      {name: "React workspace", short: "File uploads", detail: "The frontend supports document upload, viewing and interactions."},
      {name: "FastAPI service", short: "Processing", detail: "The API validates files, extracts available text and manages document operations."},
      {name: "Cloud storage", short: "Amazon S3", detail: "Original files are stored privately with short-lived download links."},
      {name: "AI features", short: "Gemini", detail: "Extracted document text supports summarization and context-grounded Q&A."},
      {name: "Metadata", short: "PostgreSQL", detail: "Document records, extracted text and processing state are persisted."}
    ],
    supporting: ["React", "FastAPI", "AWS S3", "PostgreSQL", "Gemini"],
    disclaimer: "CloudDesk uses extracted document text, not the vector-search RAG pipeline used in KnowledgeForge."
  }
};
