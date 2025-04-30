"use client";

import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { BriefcaseIcon, MapPinIcon, CalendarIcon } from "lucide-react";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: "Cognifyz",
      title: "Data Analytics Internship",
      company: "Cognifyz",
      location: "WFH",
      duration: "April 2025",
      description: [
        "Extracted and analyzed large datasets using SQL and Python to support client projects.",
        "Developed interactive dashboards with Tableau, visualizing key insights for stakeholder presentations."
      ],
      skills: [ "Python", "Pandas", "Numpy", "Seaborn", "Data Analysis"]
    },
    {
      id: "operate-live",
      title: "Web Developer Internship",
      company: "Operate Live",
      location: "Bangalore, Karnataka",
      duration: "April 2023 – May 2023",
      description: [
        "Helped in creating various web application projects.",
        "Made basic social media web application to understand web development technologies.",
        "Utilized the process of loading the latest test files and generating a report of the results."
      ],
      skills: ["Web Development", "HTML/CSS", "JavaScript", "Testing"]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Career
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Professional Experience
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              My journey in the field of data analytics and technology
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 py-12">
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative mb-10 ${index !== experiences.length - 1 ? "pb-10" : ""}`}
              >
                <span className="absolute -left-[41px] flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <BriefcaseIcon className="h-5 w-5" />
                </span>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {experience.duration}
                      </Badge>
                    </div>
                    <div className="mb-4 flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPinIcon className="mr-2 h-4 w-4" />
                        <span>{experience.company} | {experience.location}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      {experience.description.map((item, i) => (
                        <p key={`${experience.id}-desc-${i}`} className="text-sm text-gray-600 dark:text-gray-300">
                          {item}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge key={`${experience.id}-${skill}`} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
