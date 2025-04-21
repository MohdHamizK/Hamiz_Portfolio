"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { DownloadIcon, GithubIcon, LinkedinIcon, InstagramIcon, MailIcon } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Mohammed Hamiz K</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#about"
              className="transition-colors hover:text-foreground/80"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="transition-colors hover:text-foreground/80"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-foreground/80"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="transition-colors hover:text-foreground/80"
            >
              Experience
            </Link>
            <Link
              href="#education"
              className="transition-colors hover:text-foreground/80"
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground/80"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <div className="flex items-center">
            <Button variant="outline" size="icon" asChild className="mr-2">
              <a
                href="mailto:kattekarhamiz25@gmail.com"
                title="Email me"
              >
                <MailIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="mr-2">
              <a
                href="https://github.com/MohdHamizK"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="mr-2">
              <a
                href="https://www.linkedin.com/in/mohammed-hamiz-k-5b1974272/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="mr-2">
              <a
                href="https://www.instagram.com/_mohd_hamiz_k/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Page"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild>
              <a
                href="/resume.pdf"
                download
                title="Download Resume"
              >
                <DownloadIcon className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
