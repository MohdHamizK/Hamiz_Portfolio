"use client";

import { Button } from "./ui/button";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Mohammed Hamiz K
              </h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Data Analyst with expertise in SQL, Python, and data visualization
              </p>
            </div>
            <div className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              <p>
                Computer Science and Business System student with a passion for data analysis
                and a strong foundation in Python, SQL, and data visualization tools such as
                Power BI and Tableau.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center bg-gray-100 overflow-hidden rounded-lg dark:bg-gray-800">
              <div className="relative h-[350px] w-full md:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-600 animate-gradient opacity-100 dark:from-blue-800 dark:to-blue-500">
                  <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] bg-cover bg-center bg-no-repeat mix-blend-overlay" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8 backdrop-blur-sm bg-white/10 rounded-xl">
                    <h2 className="text-2xl font-bold text-white">Data Analytics Professional</h2>
                    <p className="text-white/90">
                      Passionate about turning data into actionable insights
                    </p>
                    <div className="flex justify-center space-x-2">
                      <div className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                        Python
                      </div>
                      <div className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                        SQL
                      </div>
                      <div className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                        Excel
                      </div>
                      <div className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                        Power BI
                      </div>
                      <div className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                        Dataiku DSS
                      </div>
                      <div className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                        Tableau
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full animate-bounce">
              <ChevronDownIcon className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
