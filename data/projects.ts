export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  image: string;
  video?: string;
  gallery: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  year: string;
  featured: boolean;
  technologies: Array<{
    name: string;
  }>;
  features: string[];
}

export const projects: Project[] = [
  //1
  {
    id: "exclusive-mart",
    title: "Exclusive Mart",
    subtitle: "A Full-Stack E-commerce Platform",
    description: "A comprehensive e-commerce application built with the Next.js App Router. It includes features like user authentication, product and order management, a shopping cart, wishlist functionality, and is integrated with the SSLCOMMERZ payment gateway. The project features a complete admin dashboard for managing the store's products, brands, banners, and orders.",
    shortDescription: "A full-stack e-commerce application built with Next.js and TypeScript.",
    image: "/assets/exclusive_mart/image_1.png",
    video: "/assets/exclusive_mart/video.mp4",
    gallery: [
      "/assets/exclusive_mart/image_1.png",
      "/assets/exclusive_mart/image_2.png",
      "/assets/exclusive_mart/image_3.png",
      "/assets/exclusive_mart/image_4.png",
      "/assets/exclusive_mart/image_5.png",
      "/assets/exclusive_mart/image_6.png",
    ],
    liveUrl: "https://exclusive-mart.vercel.app/",
    githubUrl: "https://github.com/YeasarArefin/execlusive-mart",
    category: "E-commerce",
    year: "2025",
    featured: true,
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "Tailwindcss" },
      { name: "NextAuth.js" },
      { name: "Shadcn/UI" },
      { name: "Nodemailer" },
      { name: "SSLCOMMERZ" }
    ],
    features: [
      "User Authentication (Sign-up, Sign-in, Email Verification)",
      "Admin Dashboard for Management",
      "Product, Brand, and Category CRUD Operations",
      "Shopping Cart & Wishlist Functionality",
      "Coupon and Discount Management",
      "Order Processing and Status Tracking",
      "Secure Payment Gateway Integration (SSLCOMMERZ)",
      "Responsive UI for all devices",
      "API routes for all major functionalities"
    ],
  },
  //2
  {
    id: "agrofusion",
    title: "AgroFusion",
    subtitle: "IoT-Based Agricultural Monitoring & AI Disease Detection System",
    description: "AgroFusion is an advanced IoT-based agricultural monitoring and management system that enables real-time tracking of critical environmental parameters like humidity, water level, temperature, pH level, and soil health. The platform integrates a powerful AI-driven disease detection model to help farmers identify potential crop diseases early, improving yield and reducing losses. Built with Next.js, TypeScript, and MongoDB, it provides farmers with actionable insights through real-time data analytics, weather predictions using NASA datasets, and expert advisory services.",
    shortDescription: "IoT-powered agricultural monitoring system with AI disease detection, real-time environmental tracking, and predictive analytics for sustainable farming.",
    image: "/assets/agrofusion/image_1.png",
    video: "/assets/agrofusion/video.mp4",
    gallery: [
      "/assets/agrofusion/image_1.png",
      "/assets/agrofusion/image_2.png",
      "/assets/agrofusion/image_3.png",
      "/assets/agrofusion/image_4.png",
      "/assets/agrofusion/image_5.png",
      "/assets/agrofusion/image_6.png",
      "/assets/agrofusion/image_7.png",
    ],
    liveUrl: "https://agro-fusion.vercel.app/",
    githubUrl: "https://github.com/YeasarArefin/AgroFusion.git",
    category: "Full-Stack Web Application",
    year: "2024",
    featured: true,
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "Google Gemini" },
      { name: "Firebase" },
      { name: "Redux Toolkit" },
      { name: "Chart.js" },
      { name: "OpenAI API" },
      { name: "NextAuth.js" },
      { name: "Radix UI" },
      { name: "React Hook Form" },
      { name: "Zod" },
      { name: "bcryptjs" },
      { name: "Nodemailer" },
      { name: "OpenMeteo API" },
      { name: "Vercel" }
    ],
    features: [
      "Real-time Environmental Monitoring (Humidity, Temperature, Water Level, pH, Soil Health)",
      "AI-Powered Disease Detection using PyTorch models",
      "Weather Condition Predictions with NASA datasets",
      "Disaster Probability Assessment (Flood & Drought)",
      "Groundwater Level Predictions",
      "Land Condition Analysis",
      "UV Index Monitoring",
      "Soil Activity Assessment",
      "Expert Advisory System with 10+ Agricultural Specialists",
      "Real-time Alerts and Notifications",
      "Interactive Data Visualization with Charts",
      "User Authentication & Authorization",
      "Responsive Dashboard Design",
      "IoT Hardware Integration",
      "Cloud-based Data Analytics",
      "Email Verification System",
      "AI Chat Assistant for Farming Advice"
    ]
  },
  //3
  {
    id: "food-sense",
    title: "Food Sense",
    subtitle: "Meal Ordering Platform",
    description: "A full-stack meal ordering application with a React frontend and an Express backend. Users can browse meals, view details, place orders, and manage their own orders. Admin flows support adding and managing meals and processing orders. Authentication is handled via Firebase, and the UI is styled with Tailwind.",
    shortDescription: "Full‑stack React + Express meal ordering app with Firebase auth.",
    image: "/assets/food_sense/image_1.png",
    video: "/assets/food_sense/video.mp4",
    gallery: [
      "/assets/food_sense/image_1.png",
      "/assets/food_sense/image_2.png",
      "/assets/food_sense/image_3.png",
      "/assets/food_sense/image_4.png",
      "/assets/food_sense/image_5.png",
      "/assets/food_sense/image_6.png",
    ],
    liveUrl: "https://foodsensee.netlify.app/",
    githubUrl: "https://github.com/YeasarArefin/food-sense-client",
    category: "MERN Stack",
    year: "2021",
    featured: false,
    technologies: [
      { name: "React" },
      { name: "React Router Dom" },
      { name: "Tailwind CSS" },
      { name: "Firebase Authentication" },
      { name: "Node.js" },
      { name: "Express" }
    ],
    features: [
      "User authentication with Firebase",
      "Protected routes via PrivateRoute",
      "Browse all meals and view meal details",
      "Place orders and view personal order history",
      "Admin: add and manage meals",
      "Admin: manage customer orders",
      "Dashboard with sidebar navigation",
      "Responsive UI with Tailwind CSS",
      "SPA-friendly routing with Netlify redirects"
    ]
  },
  //4
  {
    id: "ghostly",
    title: "Ghostly",
    subtitle: "Real-Time Room-Based Chat Application",
    description: "Ghostly is a real-time, room-based chat application built with Next.js and Socket.io. Users can create or join rooms instantly using a room code — no account or sign-up required. Once inside, they can exchange text messages, share images and files, and send code snippets with full syntax highlighting. The app supports automatic code language detection, making it a great tool for developers who want a quick, shareable environment for collaboration or pair programming sessions.",
    shortDescription: "A real-time chat app for instant text, image, file, and code sharing — no account needed, just a room code.",
    image: "/assets/ghostlly/image_1.png",
    video: "",
    gallery: [
      "/assets/ghostlly/image_1.png",
      "/assets/ghostlly/image_2.png",
      "/assets/ghostlly/image_3.png",
      "/assets/ghostlly/image_4.png",
    ],
    liveUrl: "https://ghostlly.vercel.app/",
    githubUrl: "https://github.com/YeasarArefin/ghostly",
    category: "Full Stack",
    year: "2021",
    featured: true,
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Socket.io" },
      { name: "Tailwind CSS" },
      { name: "shadcn/ui" },
      { name: "Axios" },
      { name: "ImgBB API" },
      { name: "react-syntax-highlighter" },
      { name: "Node.js" }
    ],
    features: [
      "Real-time bi-directional messaging powered by Socket.io",
      "Room-based chatting with a simple room code — no account needed",
      "Image sharing via ImgBB API integration",
      "File sharing (PDFs, ZIPs, code files, media, and more)",
      "Code sharing with syntax highlighting and auto language detection",
      "Inline code snippet detection with distinct styling",
      "Typing indicators when other users are composing",
      "Join/leave system messages in the message stream",
      "Auto-scroll to the latest message",
      "Fully responsive design for mobile, tablet, and desktop",
      "Graceful reconnection handling for slow connections"
    ]
  }
];

// Helper functions
export const getFeaturedProjects = () => projects.filter((project) => project.featured);
export const getProjectById = (id: string) => projects.find((project) => project.id === id);
export const getProjectsByCategory = (category: string) => projects.filter((project) => project.category === category);
export const getProjectsByYear = (year: string) => projects.filter((project) => project.year === year);