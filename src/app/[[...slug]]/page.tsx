"use client";
import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/util/db";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  faJs,
  faDocker,
  faCloudflare,
  faHtml5,
  faCss3,
  faNodeJs,
  faVuejs,
  faUbuntu,
  faReact,
  faMarkdown,
  faGithub,
  faGit,
  faCpanel,
  faJava,
  faLaravel,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/footer";
import Spotify from "@/components/spotify";

const knowledge: Software[] = [
  {
    name: "JavaScript",
    icon: faJs,
  },
  {
    name: "HTML",
    icon: faHtml5,
  },
  {
    name: "CSS",
    icon: faCss3,
  },
  {
    name: "Node.js",
    icon: faNodeJs,
  },
  {
    name: "Java",
    icon: faJava,
  },
  {
    name: "React",
    icon: faReact,
  },
  {
    name: "Laravel",
    icon: faLaravel,
  },
  {
    name: "PHP",
    icon: faPhp,
  },
  {
    name: "GitHub",
    icon: faGithub,
  },
  {
    name: "Markdown",
    icon: faMarkdown,
  },
  {
    name: "Git",
    icon: faGit,
  },
  {
    name: "cPanel",
    icon: faCpanel,
  },
  {
    name: "Ubuntu",
    icon: faUbuntu,
  },
  {
    name: "Cloudflare",
    icon: faCloudflare,
  },
  {
    name: "Vue.js",
    icon: faVuejs,
  },
  {
    name: "Docker",
    icon: faDocker,
  },
];

interface Software {
  name: string;
  icon: IconDefinition;
}

async function checkIfRedirect(slug: string) {
  // Check if it's a redirect or page

  const link = await prisma.link.findUnique({
    where: {
      uid: slug[0],
    },
    cacheStrategy: { ttl: 60 },
  });

  // If not, return

  if (!link) return;

  // If it's a link, add one to the hit counter and update the query then redirect

  let hits = ++link.hits;

  await prisma.link.update({
    where: {
      id: link.id,
    },
    data: {
      hits,
    },
  });

  return redirect(link.link);
}

export default async function Home({ params }: { params: { slug: string } }) {
  if (params.slug) await checkIfRedirect(params.slug);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="w-full dark:bg-[#1f2937]">
          <div className="container mx-auto px-4 md:px-6 pb-4 pt-16">
            <div className="flex flex-col items-center space-y-6">
              <div className="space-y-3 text-center dark:text-white">
                <img
                  src="https://alekeagle.me/vqA1BBfYyi.png"
                  className="rounded-full mx-auto"
                  height="140"
                  width="140"
                />
                <h1 className="text-3xl font-bold tracking-tighter">
                  Lavender 🐾
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-[#949ca7]">
                  Full Stack Developer
                </p>
              </div>
              <div className="w-full max-w-3xl space-y-3 dark:text-white">
                <h2 className="text-2xl font-bold tracking-tighter md:text-4xl">
                  About Me
                </h2>
                <p className="opacity-90 text-md">
                  Hiya! Welcome to my funny little website, I'm just your
                  neighborhood-friendly fox, and I like to code! I'm a developer
                  with a preferred preference for backend development. I'm a
                  relatively simple person, I got into coding around the age of
                  14! My first ever Discord.JS bot, yikes that was a disaster. A
                  few fun facts about me is and I also love to read. (I'm
                  currently reading Warrior Cats!)
                </p>
                <p className="opacity-90 text-md">
                  Besides that, you can usually catch me hanging around my
                  friends, <span className="font-bold">Marino</span>,{" "}
                  <span className="font-bold">Jack</span>,{" "}
                  <span className="font-bold">Ethan</span> or{" "}
                  <span className="font-bold">Mathis</span>. If not with them,
                  you'll probably find me lost in the rabbit hole of TikTok,
                  quite addicting one some might say.
                </p>
              </div>
              <div className="w-full max-w-3xl space-y-3 dark:text-white">
                <h2 className="text-2xl font-bold tracking-tighter md:text-4xl">
                  Projects
                </h2>
                <div className="space-y-4">
                  <div className="border dark:border-[#46505f] dark:bg-[#374151] p-4 rounded-lg hover:scale-105 transition-all">
                    <h3 className="text-xl font-bold dark:text-white">
                      Relatio
                    </h3>
                    <p className="text-zinc-500 dark:text-[#9097a4]">
                      A scalable solution for Roblox HR Management.
                    </p>
                    <Link
                      target="_blank"
                      className="text-blue-500 font-semibold"
                      href="https://relatio.cc"
                    >
                      View Project
                    </Link>
                  </div>
                  <div className="border dark:border-[#46505f] dark:bg-[#374151] p-4 rounded-lg hover:scale-105 transition-all">
                    <h3 className="text-xl font-bold">Unnamed Engineering</h3>
                    <p className="ext-zinc-500 dark:text-[#9097a4]">
                      We're a global product studio composed of four teenage
                      programmers.
                    </p>
                    <Link
                      target="_blank"
                      className="text-blue-500 font-semibold"
                      href="https://unnamed.engineering"
                    >
                      View Project
                    </Link>
                  </div>
                  <div className="border dark:border-[#46505f] dark:bg-[#374151] p-4 rounded-lg hover:scale-105 transition-all">
                    <h3 className="text-xl font-bold">FSPhotos</h3>
                    <p className="ext-zinc-500 dark:text-[#9097a4]">
                      A platform to view and share flight simulation photos with
                      fellow enthusiasts.
                    </p>
                    <Link
                      target="_blank"
                      className="text-blue-500 font-semibold"
                      href="https://fsphotos.cc"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-3xl space-y-3 dark:text-white">
                <h2 className="text-2xl font-bold tracking-tighter md:text-4xl">
                  Skills
                </h2>
                <div className="border p-4 rounded-lg dark:border-[#46505f] dark:bg-[#374151]">
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {knowledge.map((software, id) => (
                      <div className="flex items-center space-x-2" key={id}>
                        <FontAwesomeIcon width={"15px"} icon={software.icon} />
                        <p>{software.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full max-w-3xl space-y-3 dark:text-white">
                <h2 className="text-2xl font-bold tracking-tighter md:text-4xl">
                  Contact
                </h2>
                <div className="border p-4 rounded-lg dark:border-[#46505f] dark:bg-[#374151]">
                  <p>form broken right now, oops lol hehehehe</p>
                  {/* <form
                    onSubmit={handleSubmit(ContactSubmit)}
                    className="space-y-3"
                  >
                    <div className="flex gap-3">
                      <input
                        placeholder="Name"
                        className="w-1/2 rounded-lg p-2 border-2 dark:bg-[#2f3745] dark:border-0  dark:text-white"
                        {...register('name')}
                      />
                      <input
                        placeholder="Email"
                        type="email"
                        className="w-1/2 rounded-lg p-2 border-2 dark:bg-[#2f3745] dark:border-0  dark:text-white"
                        {...register('email')}
                      />
                    </div>
                    <textarea
                      placeholder="Hey there Alexander!"
                      className="w-full rounded-lg p-2 border-2 h-36 dark:bg-[#2f3745] dark:border-0  dark:text-white"
                      {...register('message')}
                    />
                    <input
                      className="p-2 w-full border-2 rounded-lg cursor-pointer transition-all dark:border-gray-600 dark:text-white dark:hover:bg-gray-600 hover:bg-gray-200"
                      value="Submit"
                      type="submit"
                    />
                  </form> */}
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <Spotify />
        </div>
      </motion.div>
    </>
  );
}
