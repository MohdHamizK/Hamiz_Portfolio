"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { ChevronRightIcon, UserIcon } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Data-Driven and Dedicated
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A Computer Science & Business Systems student with a passion for data analytics to make an impact
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter">
                My Story
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                My name is Mohammed Hamiz K, a Computer Science and Business System student at Anna University-Vel Tech Multi Tech Engineering College with a CGPA of 7.3 . I am passionate about data analytics and have developed strong skills in SQL, Python, and data visualization tools like Power BI and Tableau.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                I have completed relevant coursework in Python Programming, Microsoft Excel, SQL, Database Management, Dataiku DSS, Power BI, Tableau and various SQL variants including PSQL, MYSQL, and MS SQL. My journey in data analytics is supported by a strong foundation in these technical skills.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Recently, I completed a Data Analytics Internship at Deloitte where I extracted and analyzed large datasets using SQL and Python to support client projects. I also developed interactive dashboards with Tableau, visualizing key insights for stakeholder presentations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="outline" asChild>
                <a href="#skills">
                  View My Skills <ChevronRightIcon className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3">
                      <UserIcon className="h-5 w-5 text-blue-500" />
                      <div className="font-semibold">Personal Information</div>
                    </div>
                    <Separator />
                    <div className="grid gap-1">
                      <div className="font-medium">Address</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Arabic College, Bangalore-560045
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <a href="tel:+919444200548">+91 9444200548</a>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <div className="font-medium">Mail</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <a href="mailto:kattekarhamiz25@gmail.com">kattekarhamiz25@gmail.com</a>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <a href="https://www.linkedin.com/in/mohammed-hamiz-k-5b1974272/" target="_blank" rel="noopener noreferrer">
                          Mohammed Hamiz K
                        </a>
                      </div>
                    <div className="grid gap-1">
                      <div className="font-medium">Instagram</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <a href="https://www.instagram.com/_mohd_hamiz_k/" target="_blank" rel="noopener noreferrer">
                          Mohd_Hamiz_K
                        </a>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <div className="font-medium">GitHub</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <a href="https://github.com/MohdHamizK" target="_blank" rel="noopener noreferrer">
                          MohdHamizK
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
