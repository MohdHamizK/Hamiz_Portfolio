"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCapIcon, AwardIcon } from "lucide-react";
import { Separator } from "./ui/separator";

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  duration: string;
  grade: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export function EducationSection() {
  const educationList: Education[] = [
    {
      id: "anna-university",
      institution: "ANNA UNIVERSITY-VEL TECH MULTI TECH ENGINEERING COLLEGE",
      degree: "Bachelor's Degree",
      field: "COMPUTER SCIENCE AND BUSINESS SYSTEM",
      location: "Chennai",
      duration: "2021-2025",
      grade: "CGPA -7.3"
    },
    {
      id: "adarsh",
      institution: "ADARSH MATRICULATION HIGHER SECONDARY SCHOOL",
      degree: "SSLC, HSC",
      field: "",
      location: "Vellore",
      duration: "2019-2021",
      grade: "PERCENTAGE -75.4, 83.3"
    }
  ];

  const certifications: Certification[] = [
    {
      id: "sql-cert",
      name: "SQL Completion Certificate",
      issuer: "Certificate Authority",
      date: "March, 2025",
      link: "https://www.udemy.com/certificate/UC-46636a91-5741-46b7-91c1-aa25817088ac/"
    },
    {
      id: "Intern-cert",
      name: "Deloitte Certificate",
      issuer: "Certificate Authority",
      date: "March, 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_tbyRTsNTqgGMupYvW_1743057927595_completion_certificate.pdf"
    },
    {
      id: "python-cert",
      name: "Python Completion Certificate",
      issuer: "Certificate Authority",
      date: "April, 2025",
      link: "https://www.udemy.com/certificate/UC-5c683fbf-6734-4538-ae22-b207c9e990eb/"
    },
    {
      id: "Google-cert1",
      name: "Google Cloud Data Analytics",
      issuer: "Google Cloud",
      date: "May, 2025",
      link: "https://www.cloudskillsboost.google/public_profiles/a483f721-25e4-4571-a2f7-621802243281/badges/15602010"
    },
    {
      id: "Google-cert2",
      name: "Prompt Design for Vertex AI",
      issuer: "Google Cloud",
      date: "May, 2025",
      link: "https://www.cloudskillsboost.google/public_profiles/a483f721-25e4-4571-a2f7-621802243281/badges/15622329"
    },
  ];

  const relevantCoursework = [
    "Python Programming",
    "Microsoft Excel",
    "ORACLE SQL",
    "Database Management",
    "PSQL, MYSQL",
    "MS SQL",
    "HTML/CSS&JS",
    "Power BI",
    "Dataiku DSS",
    "Tableau"
  ];

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Qualifications
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Education & Certifications
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              My academic background and professional certifications
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-1 lg:grid-cols-2">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold pl-28">Education</h3>
            {educationList.map((edu) => (
              <Card key={edu.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    <GraduationCapIcon className="h-5 w-5 text-blue-600" />
                    <CardTitle>{edu.degree}</CardTitle>
                  </div>
                  <CardDescription>{edu.field}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="font-medium">{edu.institution}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.location} | {edu.duration}
                    </div>
                    <div className="text-sm font-medium text-blue-600">
                      {edu.grade}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-2">
                  <GraduationCapIcon className="h-5 w-5 text-blue-600" />
                  <CardTitle>Relevant Coursework</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {relevantCoursework.map((course) => (
                    <Badge key={course} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold pl-20">Certifications</h3>
            {certifications.map((cert) => (
              <Card key={cert.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    <AwardIcon className="h-5 w-5 text-green-600" />
                    <CardTitle>{cert.name}</CardTitle>
                  </div>
                  <CardDescription>
                    {cert.issuer} | {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {cert.link && (
                    <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      View Certificate
                      </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
