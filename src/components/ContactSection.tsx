"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { PhoneIcon, GithubIcon, LinkedinIcon, InstagramIcon, MailIcon, MapPinIcon } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Get In Touch
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Contact Me
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Interested in Hiring Me? Let's connect
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Feel free to reach out for collaborations, Opportunities, or just to say hello. I'll try to get back to you as soon as possible.
            </p>

            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full dark:bg-blue-900">
                    <MailIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a
                      href="mailto:kattekarhamiz25@gmail.com"
                      className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                    >
                      kattekarhamiz25@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-green-100 p-2 rounded-full dark:bg-green-900">
                    <PhoneIcon className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <a
                      href="tel:+919444200548"
                      className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                    >
                      +91 9444200548
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full dark:bg-purple-900">
                    <MapPinIcon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      317/1, Rashad Nagar, Arabic College, Bangalore-560045
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="font-medium mb-2">Social Media</div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://github.com/MohdHamizK"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub Profile"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://www.linkedin.com/in/mohammed-hamiz-k-5b1974272/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn Profile"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://www.instagram.com/_mohd_hamiz_k/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram Page"
                      >
                        <InstagramIcon className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Send Me a Message</h3>
            <Card>
              <CardContent className="p-6">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="border-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="border-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="border-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Subject of your message"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="border-2 border-gray-200 rounded-md px-3 py-2 min-h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
