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

];

// Helper functions
export const getFeaturedProjects = () => projects.filter((project) => project.featured);
export const getProjectById = (id: string) => projects.find((project) => project.id === id);
export const getProjectsByCategory = (category: string) => projects.filter((project) => project.category === category);
export const getProjectsByYear = (year: string) => projects.filter((project) => project.year === year);