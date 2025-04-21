"use client";

import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { CodeIcon, DatabaseIcon, BarChartIcon, TableIcon } from "lucide-react";

export function SkillsSection() {
  const technicalSkills = [
    { name: "Python", level: 90, icon: <CodeIcon className="h-5 w-5 text-blue-500" /> },
    { name: "SQL", level: 90, icon: <DatabaseIcon className="h-5 w-5 text-green-500" /> },
    { name: "Speech Recognition", level: 85, icon: <CodeIcon className="h-5 w-5 text-purple-500" /> },
    { name: "AI Automation", level: 80, icon: <CodeIcon className="h-5 w-5 text-yellow-500" /> },
    { name: "Microsoft Excel", level: 75, icon: <TableIcon className="h-5 w-5 text-green-500" /> },
    { name: "Power BI", level: 95, icon: <BarChartIcon className="h-5 w-5 text-blue-500" /> },
    { name: "Dataiku DSS", level: 95, icon: <CodeIcon className="h-5 w-5 text-red-500" /> },
    { name: "Tableau", level: 95, icon: <BarChartIcon className="h-5 w-5 text-orange-500" /> },
  ];

  const developerTools = [
    { name: "VS Code", level: 90 },
    { name: "PyCharm", level: 85 },
    { name: "Jupyter Notebook", level: 80 },
  ];

  const databaseSkills = [
    { name: "ORACLE SQL", level: 80 },
    { name: "PSQL", level: 95 },
    { name: "MYSQL", level: 90 },
    { name: "MS SQL", level: 85 },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              My Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Technical Skills
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A comprehensive overview of my technical proficiencies in data analytics
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="bg-blue-500 p-4 text-white">
              <h3 className="text-lg font-bold">Technical Proficiencies</h3>
              <p className="text-sm text-blue-50">Core skills for data analytics</p>
            </div>
            <CardContent className="p-6">
              <div className="grid gap-4">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-green-500 p-4 text-white">
              <h3 className="text-lg font-bold">Developer Tools</h3>
              <p className="text-sm text-green-50">Development environments</p>
            </div>
            <CardContent className="p-6">
              <div className="grid gap-4">
                {developerTools.map((tool) => (
                  <div key={tool.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{tool.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {tool.level}%
                      </span>
                    </div>
                    <Progress value={tool.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-purple-500 p-4 text-white">
              <h3 className="text-lg font-bold">Database Skills</h3>
              <p className="text-sm text-purple-50">SQL and database technologies</p>
            </div>
            <CardContent className="p-6">
              <div className="grid gap-4">
                {databaseSkills.map((db) => (
                  <div key={db.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{db.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {db.level}%
                      </span>
                    </div>
                    <Progress value={db.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto max-w-5xl">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Other Skills</h3>
              <Separator className="my-4" />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="font-medium">Languages</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Proficient in English, Hindi, Tamil and Urdu.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Time Management</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Utilizing time management tools and techniques to plan, schedule, and execute tasks.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Continuous Learning</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Commitment to continuous learning to stay current with the latest industry trends and technologies.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Adaptability</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Fast learner, quickly adapting to new technologies and challenges, thriving in collaborative environments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
