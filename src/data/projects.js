export const projects = [
  {
    id: "delivery",
    number: "01",
    title: "Delivery, in real time.",
    name: "Real-Time Delivery Tracking",
    category: "Backend",
    kind: "BACKEND SYSTEM",
    description:
      "Following a delivery should be simple. A backend that connects orders, drivers, and live location updates from pickup to doorstep.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis"],
    repository: "Real-Time-Delivery-Tracking-Platform",
    detail:
      "An event-driven delivery system with WebSocket updates, role-based access, and Redis Pub/Sub. Order state validation, rate limiting, and API documentation make the system easier to operate and build on.",
    focus: "Live tracking · Event-driven architecture · API design",
  },
  {
    id: "documents",
    number: "02",
    title: "Less searching. More understanding.",
    name: "AI Document Analyst",
    category: "AI & Data",
    kind: "APPLIED AI",
    description:
      "A conversation with your documents. Upload a PDF, ask a question, and get an answer grounded in its contents.",
    stack: ["Python", "LangChain", "ChromaDB", "Streamlit"],
    repository: "AI-Document-Analyst",
    detail:
      "A retrieval-augmented generation pipeline splits PDFs into searchable chunks, embeds them locally with HuggingFace, and retrieves relevant context using ChromaDB. A conversational interface puts the pipeline within reach of everyday users.",
    focus: "Document retrieval · Local embeddings · Conversational UI",
  },
  {
    id: "maintenance",
    number: "03",
    title: "Catch the signal. Before the failure.",
    name: "Predictive Maintenance",
    category: "AI & Data",
    kind: "MACHINE LEARNING",
    description:
      "Making equipment health easier to understand, with sensor data, remaining-life predictions, and a clear monitoring dashboard.",
    stack: ["Python", "XGBoost", "FastAPI", "Pandas"],
    repository: "Predictive-Maintenance-System-for-Industrial-Equipment",
    detail:
      "Using NASA’s CMAPSS turbofan dataset, this project simulates incoming sensor readings and predicts remaining useful life with XGBoost. A separate FastAPI service supplies predictions to a dashboard with condition alerts.",
    focus: "Sensor simulation · Predictive models · Data visualization",
  },
  {
    id: "agro",
    number: "04",
    title: "Technology, closer to the field.",
    name: "AgroEasy",
    category: "Product",
    kind: "AGRICULTURE · IN DEVELOPMENT",
    description:
      "An agriculture platform taking shape around a practical goal: bring farm planning, inventory, and orders into one place.",
    stack: ["Farm operations", "Product planning", "Agriculture"],
    repository: "AgroEasy",
    linkLabel: "Project overview",
    detail:
      "AgroEasy explores how farmers and agricultural businesses can move from scattered records to a shared view of their operations. The public repository currently documents the product direction and planned workflows.",
    focus: "Crop planning · Inventory visibility · Order workflows",
  },
];
