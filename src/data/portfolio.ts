import {
  Cloud,
  Code2,
  Database,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  Workflow,
} from "lucide-react";

export const navItems = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Certifications",
  "Resume",
  "Contact",
] as const;

export const profile = {
  name: "Sejal Nayak",
  title: "Senior Software Engineer",
  companyBadge: "Senior Software Engineer @ Amagi",
  tagline: "From Fintech Platforms to Broadcast Automation Systems",
  location: "Bengaluru, India",
  subtitle:
    "Building scalable backend systems, distributed architectures, and cloud-native applications using Golang, Python, AWS, Kubernetes, and Event-Driven Architectures.",
  email: "sejalnayak2001@gmail.com",
  phone: "+91-8955191059",
  github: "https://github.com/sejal254",
  linkedin: "https://www.linkedin.com/in/sejal-nayak-5800361b8/",
  leetcode: "https://leetcode.com/placeholder",
};

export const heroStats = [
  {
    value: "4+",
    label: "Years Experience",
  },
  {
    value: "AWS",
    label: "Certified Solutions Architect",
  },
  {
    value: "2",
    label: "Product Companies",
  },
  {
    value: "Backend",
    label: "Specialist",
  },
];

export const socialProof = [
  "Senior Software Engineer @ Amagi",
  "AWS Certified Solutions Architect",
  "IIIT Bhopal",
  "4+ Years Experience",
  "Cloud & Distributed Systems",
];

export const whatIDo = [
  {
    icon: ServerCog,
    title: "Backend Engineering",
    description: "Building scalable APIs and backend services using Golang, Python, and Ruby.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Designing serverless and cloud-native systems on AWS.",
  },
  {
    icon: Workflow,
    title: "Distributed Systems",
    description: "Building resilient event-driven architectures.",
  },
  {
    icon: Workflow,
    title: "Media Workflow Automation",
    description: "Automating media processing and broadcast workflows.",
  },
  {
    icon: Database,
    title: "Fintech Platforms",
    description: "Developing secure financial products and loan processing systems.",
  },
  {
    icon: Cloud,
    title: "System Reliability",
    description: "Improving resiliency through chaos engineering and observability.",
  },
];

export const aboutMilestones = [
  {
    year: "2019 - 2023",
    title: "IIIT Bhopal, B.Tech CSE",
    description:
      "Graduated from Indian Institute of Information Technology Bhopal with a Bachelor of Technology in Computer Science and Engineering and a CGPA of 8.56/10.",
  },
  {
    year: "2023 - 2025",
    title: "KreditBee Backend Engineering",
    description:
      "Built production systems for loan workflows, notifications, PDF templatization, Freshdesk analytics, bulk uploads, admin panels, and user feedback platforms.",
  },
  {
    year: "2025 - Present",
    title: "Amagi Media Workflow Systems",
    description:
      "Designing backend services, serverless media ingestion workflows, chaos engineering automation, and DAZN Linear playlist processing pipelines.",
  },
  {
    year: "Certified",
    title: "AWS Cloud Credentials",
    description:
      "AWS Cloud Practitioner certified from 09/2021 to 09/2024 and AWS Certified Solutions Architect certified from 10/2023 to 10/2026.",
  },
];

export const experiences = [
  {
    company: "Amagi",
    role: "Senior Software Engineer",
    location: "Bengaluru",
    period: "July 2025 - Present",
    highlighted: true,
    impact:
      "Supports large-scale media workflows, broadcast automation, automated playout integrations, and proactive reliability testing for distributed systems.",
    highlights: [
      "Designed serverless media ingestion systems using Amazon S3 Event Notifications and AWS Lambda.",
      "Automated media asset creation and processing workflows.",
      "Implemented chaos engineering using LitmusChaos and AWS Fault Injection Simulator.",
      "Simulated Kubernetes pod failures, RDS outages, network disruptions, and PubNub API failures.",
      "Built backend services using Golang, Python, Ruby on Rails, and AWS.",
      "Developed DAZN Linear playlist processing pipelines.",
      "Automated BXF schedule ingestion, playlist generation, metadata enrichment, and playout integrations.",
    ],
    technologies: [
      "Golang",
      "Python",
      "Ruby on Rails",
      "AWS",
      "S3",
      "Lambda",
      "Kubernetes",
      "LitmusChaos",
      "AWS FIS",
    ],
  },
  {
    company: "KreditBee",
    role: "Software Engineer",
    location: "Bengaluru",
    period: "July 2023 - July 2025",
    highlighted: false,
    impact:
      "Improved reporting, customer issue discovery, document generation, secure uploads, and operational workflows across fintech lending products.",
    highlights: [
      "Built scalable Freshdesk analytics data pipeline.",
      "Normalized customer support JSON into relational database models.",
      "Developed Premium Personal Salaried Loan Intent Submission platform.",
      "Built WhatsApp and Email notification systems using Golang and AWS Fargate.",
      "Created PDF templatization service supporting dynamic markdown-to-PDF generation.",
      "Built secure bulk insurance upload solution using S3 pre-signed URLs.",
      "Developed Admin Panel for healthcare plans and Freshdesk management.",
    ],
    technologies: ["Golang", "AWS", "MySQL", "S3", "Fargate", "REST APIs"],
  },
  {
    company: "KreditBee",
    role: "Software Developer Intern",
    location: "Remote / Bengaluru",
    period: "Feb 2023 - July 2023",
    highlighted: false,
    impact:
      "Enabled structured in-app feedback capture through a React and Go platform with REST APIs and persistent storage.",
    highlights: [
      "Built InAppFeedback module.",
      "Developed React frontend.",
      "Created REST APIs using Golang Gin framework.",
      "Used Beego ORM and MySQL.",
    ],
    technologies: ["React.js", "Golang", "Gin", "Beego ORM", "MySQL", "REST APIs"],
  },
  {
    company: "F13 Technologies",
    role: "AWS Cloud Intern",
    location: "Remote",
    period: "May 2022 - July 2022",
    highlighted: false,
    impact:
      "Built practical AWS cloud foundation across compute, storage, networking, monitoring, and access management services.",
    highlights: [
      "Worked with EC2, Lambda, IAM, VPC, CloudWatch, and S3.",
      "Configured cloud infrastructure and deployments.",
    ],
    technologies: ["AWS", "EC2", "Lambda", "S3", "IAM", "VPC", "CloudWatch"],
  },
];

export const projects = [
  {
    title: "Media Ingestion Platform",
    problem: "Manual onboarding of media assets created operational bottlenecks.",
    solution:
      "Built an event-driven ingestion system using S3 event notifications and AWS Lambda.",
    impact: "Enabled automated asset processing and reduced manual intervention.",
    stack: ["AWS Lambda", "S3", "Python", "Golang"],
  },
  {
    title: "Chaos Engineering Framework",
    problem:
      "Distributed systems needed safer validation against infrastructure and third-party failure modes.",
    solution:
      "Implemented resilience testing with LitmusChaos, Kubernetes fault scenarios, and AWS Fault Injection Simulator.",
    impact:
      "Surfaced system weaknesses earlier across pod failures, RDS outages, network disruption, and PubNub API failures.",
    stack: ["LitmusChaos", "AWS FIS", "Kubernetes", "RDS"],
  },
  {
    title: "Freshdesk Analytics Pipeline",
    problem:
      "Customer support JSON was difficult to query for recurring issue analysis and product feedback loops.",
    solution:
      "Designed a scalable analytics pipeline normalizing customer support data into 10-15 relational models.",
    impact:
      "Enabled reporting, trend analysis, and product/support improvement decisions from structured support data.",
    stack: ["Golang", "MySQL", "Freshdesk", "REST APIs"],
  },
  {
    title: "PDF Templatization Service",
    problem:
      "Document generation for LFA, sanction, and CSR reports had repeated code and limited previewability.",
    solution:
      "Created a dynamic Markdown-to-PDF generation service with template variables and preview support.",
    impact:
      "Consolidated document workflows and improved maintainability for user-facing financial documents.",
    stack: ["Golang", "Markdown", "PDF", "Preview System"],
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Golang", "Python", "SQL", "C++", "Ruby"],
    proficiency: 92,
  },
  {
    title: "Backend Engineering",
    skills: ["REST APIs", "Distributed Systems", "Event Driven Systems", "Microservices"],
    proficiency: 90,
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Lambda", "S3", "EC2", "IAM", "Fargate", "Kubernetes", "AWS FIS"],
    proficiency: 88,
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "SQLite"],
    proficiency: 82,
  },
  {
    title: "AI Development Tools",
    skills: ["Cursor", "Claude Code", "GitHub Copilot", "ChatGPT", "Roo Code"],
    proficiency: 84,
  },
];

export const skills = skillCategories.flatMap((category) => category.skills);

export const capabilityCards = [
  {
    icon: ServerCog,
    title: "Backend Systems",
    description: "Golang, Python, Ruby on Rails, REST APIs, validation flows, and service orchestration.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "AWS S3, Lambda, Fargate, RDS, EC2, IAM, VPC, CloudWatch, and cloud automation.",
  },
  {
    icon: Workflow,
    title: "Media & Distributed Workflows",
    description: "Broadcast automation, DAZN Linear pipelines, BXF ingestion, and metadata enrichment.",
  },
  {
    icon: Database,
    title: "Data Foundations",
    description: "MySQL, MongoDB, SQLite, Freshdesk normalization, analytics schemas, and bulk upload flows.",
  },
  {
    icon: Code2,
    title: "Product Interfaces",
    description: "React.js feedback modules, admin panels, PDF previews, and operator-friendly tooling.",
  },
];

export const contactLinks = [
  {
    label: profile.location,
    href: "#contact",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Workflow,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Code2,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    href: `tel:${profile.phone}`,
    icon: Phone,
  },
];

export const education = {
  institution: "Indian Institute of Information Technology Bhopal (IIIT Bhopal)",
  degree: "Bachelor of Technology",
  field: "Computer Science and Engineering",
  cgpa: "8.56 / 10",
  duration: "2019 - 2023",
};

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    validity: "Valid: 2023 - 2026",
  },
  {
    name: "AWS Cloud Practitioner",
    validity: "Completed: 2021",
  },
];
