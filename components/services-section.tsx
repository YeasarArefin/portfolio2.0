// import { Card, CardContent } from "@/components/ui/card"
// import { Monitor, Server, Layers } from "lucide-react"

// export function ServicesSection() {
//   const services = [
//     {
//       icon: Monitor,
//       title: "Front-End",
//       description: "Get awesome Frontend with React.js",
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: Server,
//       title: "Back-End",
//       description: "Get performant application with Node.js",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: Layers,
//       title: "Full-Stack",
//       description: "Get Dynamic functional site with MERN",
//       gradient: "from-green-500 to-teal-500",
//     },
//   ]

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">Awesome Service</h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <Card
//               key={index}
//               className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
//             >
//               <CardContent className="p-8 text-center">
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <service.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
//                 <p className="text-slate-300 leading-relaxed">{service.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Server, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces using React.js, Next.js, and modern CSS frameworks.",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building robust server-side applications and APIs using Node.js, Express.js, and modern backend technologies.",
    technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing and optimizing database schemas for scalable and efficient data management.",
    technologies: ["MongoDB", "PostgreSQL"],
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Creating mobile-first, responsive designs that work seamlessly across all devices and screen sizes.",
    technologies: ["Mobile-First", "CSS Grid", "Flexbox", "Bootstrap", "Tailwind CSS"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "End-to-end web application development from concept to deployment using the MERN stack.",
    technologies: ["MERN Stack", "Full Stack", "Cloud Deployment"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing web applications for speed, SEO, and user experience using modern best practices.",
    technologies: ["Performance", "SEO", "Core Web Vitals", "Lighthouse", "Optimization"],
    color: "from-indigo-500 to-blue-500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30 mb-4">What I Do</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>{" "}
            <span className="text-white">
              I Offer
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I provide comprehensive web development services, from frontend design to backend architecture, helping
            businesses build modern, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-slate-600 text-slate-300 text-xs bg-slate-800/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">
            Ready to bring your ideas to life? Let's work together to create something amazing.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30 rounded-full px-6 py-3 text-purple-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for new projects
          </div>
        </div>
      </div>
    </section>
  );
}
