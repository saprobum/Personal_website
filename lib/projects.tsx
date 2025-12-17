export interface Project {
    id: string;
    title: string;
    category: string;
    image: string; // Tailwind class for gradient or image URL
    description: string;
    longDescription: string;
    technologies: string[];
    client?: string;
    timeline?: string;
    role?: string;
}

export const projects: Project[] = [
    {
        id: "orion-dashboard",
        title: "Orion Dashboard",
        category: "Dashboard",
        image: "bg-gradient-to-br from-blue-500 to-indigo-500",
        description: "A futuristic data visualization platform for interstellar logistics.",
        longDescription: "Orion Dashboard is a cutting-edge platform designed to visualize complex datasets for interstellar logistics companies. It handles real-time tracking of cargo shipments across multiple star systems, providing actionable insights through immersive 3D visualizations and predictive analytics.",
        technologies: ["Next.js", "D3.js", "WebGL", "Tailwind CSS"],
        client: "Galactic Logistics Inc.",
        timeline: "3 months",
        role: "Lead Frontend Engineer",
    },
    {
        id: "nebula-chat",
        title: "Nebula Chat",
        category: "Communication",
        image: "bg-gradient-to-br from-purple-500 to-pink-500",
        description: "Encrypted real-time communication tool using WebSockets.",
        longDescription: "Nebula Chat prioritizes security and speed, offering end-to-end encrypted messaging for sensitive corporate communications. Built with a decentralized architecture, it ensures zero downtime and complete data sovereignty for its users.",
        technologies: ["React", "Socket.io", "Redis", "Node.js"],
        client: "Nebula Corp",
        timeline: "2 months",
        role: "Full Stack Developer",
    },
    {
        id: "gravity-note",
        title: "Gravity Note",
        category: "Productivity",
        image: "bg-gradient-to-br from-green-400 to-emerald-500",
        description: "Physics-based note taking app with natural interactions.",
        longDescription: "Gravity Note reimagines the digital whiteboard by adding physics to sticky notes and cards. Users can toss, stack, and organize their thoughts with natural gestures, making brainstorming sessions more dynamic and engaging.",
        technologies: ["Framer Motion", "React", "Zustand", "Firebase"],
        client: "Internal Project",
        timeline: "1 month",
        role: "Creator",
    },
    {
        id: "eclipse-commerce",
        title: "Eclipse Commerce",
        category: "E-commerce",
        image: "bg-gradient-to-br from-orange-400 to-red-500",
        description: "Headless e-commerce solution used by major brands.",
        longDescription: "Eclipse Commerce is a highly flexible headless storefront built for performance. It seamlessly integrates with Shopify and BigCommerce backends while delivering a bespoke, app-like experience on the frontend.",
        technologies: ["Next.js", "Shopify API", "Stripe", "Sanity CMS"],
        timeline: "6 months",
        client: "Eclipse Fashion",
        role: "Frontend Architect",
    },
    {
        id: "cyber-security-analyzer",
        title: "Cyber Security Analyzer",
        category: "Security",
        image: "bg-gradient-to-br from-slate-700 to-slate-900",
        description: "Real-time threat detection and analysis tool.",
        longDescription: "A robust security dashboard that monitors network traffic in real-time, identifying anomalies and potential threats using machine learning algorithms. It provides security teams with immediate alerts and detailed forensic reports.",
        technologies: ["Python", "React", "TensorFlow", "FastAPI"],
        client: "CyberSec Ltd",
        timeline: "4 months",
        role: "Frontend Lead",
    },
    {
        id: "health-track-pro",
        title: "Health Track Pro",
        category: "Health",
        image: "bg-gradient-to-br from-teal-400 to-cyan-500",
        description: "Patient monitoring dashboard for healthcare providers.",
        longDescription: "Health Track Pro connects with wearable devices to provide doctors with continuous health data from their patients. The dashboard highlights critical trends and alerts medical staff to potential emergencies before they happen.",
        technologies: ["React", "HealthKit", "Chart.js", "AWS"],
        client: "MedTech Solutions",
        timeline: "5 months",
        role: "Senior Developer",
    },
];
