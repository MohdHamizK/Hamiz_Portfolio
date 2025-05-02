"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

interface ProjectLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  bullets: string[];
  links: ProjectLink[];
  image: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: "Rexiz",
      title: "Rexiz – Personal AI Assistant",
      description: "An AI assistant that executes voice commands, automates tasks, and fetches real-time data.",
      date: "Feb 2025",
      technologies: ["Python", "Speech Recognition", "Open AI API", "Text-to-Speech (TTS)", "VS Code"],
      bullets: [
        "Developed an AI assistant to execute voice commands, automate tasks, and fetch real-time data.",
        "Implemented speech recognition to convert voice commands into actions.",
        "Automated system tasks like opening applications, searching the web, and managing files.",
        "Used text-to-speech (TTS) to generate human-like responses."
      ],
      links: [
        { name: "GitHub", url: "https://github.com/MohdHamizK/Rexiz-AI", icon: <GithubIcon className="h-4 w-4" /> }
      ],
      image: "/projects/ai-assistant.png"
    },
    {
      id: "data analytics",
      title: "Data Analytics Project",
      description: "A comprehensive data analytics project using Python and various libraries.",
      date: "April 2025",
      technologies: ["Python", "Excel", "Power BI", "Jupyter Notebook", "Pandas", "NumPy"],
      bullets: [
        "This project delves into the world of online electronics sales by analyzing a dataset from Amazon.",
        "This exploration will aid in understanding market dynamics and potentially inform strategic business decisions.",
        "Using Python libraries and guided by data science principles, we'll uncover valuable insights into customer behavior, product performance, and sales trends."
      ],
      links: [
        { name: "GitHub", url: "https://github.com/MohdHamizK/Data-Analytics-Project", icon: <GithubIcon className="h-4 w-4" /> }
      ],
      image: "/projects/data-analytics.png"
    },
    {
      id: "SQL Store Analysis",
      title: "SQL Store Analysis Project",
      description: "This project leverages SQL to query structured data, identify sales patterns, understand customer behavior, and assist in business decision-making.",
      date: "April 2025",
      technologies: ["SQL", "Excel", "Power BI", "MySQL", "Pandas", "NumPy"],
      bullets: [
        "The SQL Store Analysis project is a data- driven exploration and reporting system designed to uncover insights from a digital store's relational database.",
        " This project leverages SQL to query structured data, identify sales patterns, understand customer behavior, and assist in business decision-making.",
        " It demonstrates strong skills in database management, complex querying, and data analysis, ideal for showcasing practical knowledge in SQL and data interpretation."
      ],
      links: [
        { name: "GitHub", url: "https://github.com/MohdHamizK/SQL-Store-Analysis", icon: <GithubIcon className="h-4 w-4" /> }
      ],
      image: "/projects/SQL-LOGO.png"
    },
    {
      id: "attendance",
      title: "Online Attendance Tracking System",
      description: "A web-based system for real-time, accurate attendance tracking, reducing manual errors.",
      date: "September 2024",
      technologies: ["HTML/CSS", "VS code"],
      bullets: [
        "Developed a web-based system for real-time, accurate attendance tracking, reducing manual errors.",
        "Implemented role-based access control to ensure secure, user-specific data access.",
        "Integrated data analytics for generating attendance reports and insights to optimize policies."
      ],
      links: [
        { name: "GitHub", url: "https://github.com/MohdHamizK/Attendance-Tracking-System", icon: <GithubIcon className="h-4 w-4" /> }
      ],
      image: "/projects/attendance-system.png"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              My Work
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Projects
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Showcasing my data analytics and development projects
            </p>
          </div>
        </div>

        <Tabs defaultValue="all" className="mt-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="web">Web Development & Statistics</TabsTrigger>
              <TabsTrigger value="ai">AI & Data</TabsTrigger>
              <TabsTrigger value="sql">SQL & Excel</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-4 space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="python" className="mt-4 space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {projects
                .filter((project) => project.technologies.includes("Python"))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-4 space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {projects
                .filter((project) => project.technologies.includes("HTML/CSS"))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="sql" className="mt-4 space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {projects
                .filter((project) => 
                  project.technologies.includes("SQL") ||
                  project.technologies.includes("Excel"))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-4 space-y-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {projects
                .filter((project) =>
                  project.technologies.includes("AI") ||
                  project.technologies.includes("Open AI API") ||
                  project.technologies.includes("Speech Recognition")
                )
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div
        className="h-48 w-full bg-gray-100 dark:bg-gray-800 bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.image || '/placeholder.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex h-full items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
          <div className="space-y-1">
            <Badge variant="outline" className="bg-white/20 text-white border-white/30">
              {project.date}
            </Badge>
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {tech}
            </Badge>
          ))}
        </div>
        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400 pl-5 list-disc">
          {project.bullets.map((bullet, i) => (
            <li key={`${project.id}-bullet-${i}`}>{bullet}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 dark:bg-gray-800/50 px-6 py-3">
        <div className="flex flex-wrap gap-2">
          {project.links.map((link, i) => (
            <Button key={`${project.id}-link-${i}`} variant="outline" size="sm" asChild className="gap-1">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
                {link.name}
                <ExternalLinkIcon className="ml-1 h-3 w-3" />
              </a>
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
