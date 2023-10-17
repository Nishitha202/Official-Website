import React from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import Link from "next/link";

type Props = {};

export default function SiteFooter({}: Props) {
  return (
    <footer className="bg-gray-100 dark:bg-[#161D29] py-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-10">
        <div className="flex md:gap-10 gap-5">
        <Link href="https://github.com/FrontendFreaks" target="_blank" rel="noreferrer">
                <Icons.gitHub className="h-9 w-9 hover:text-[#8fa0be] dark:hover:text-[#30405c]" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com/frontendfreaks" target="_blank" rel="noreferrer">
                <Icons.twitter className="h-9 w-9 hover:text-[#8fa0be] dark:hover:text-[#30405c]" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.youtube.com/c/VishalRajput_1" target="_blank" rel="noreferrer">
                <Icons.youtube className="h-9 w-9 hover:text-[#8fa0be] dark:hover:text-[#30405c]" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://www.instagram.com/vishalraj.dev/" target="_blank" rel="noreferrer">
                <Icons.instagram className="h-9 w-9 hover:text-[#8fa0be] dark:hover:text-[#30405c]" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/company/frontendfreaks/" target="_blank" rel="noreferrer">
                <Icons.linkedin className="h-9 w-9 hover:text-[#8fa0be] dark:hover:text-[#30405c]" />
                <span className="sr-only">LinkedIn</span>
              </Link>
        </div>

        <div>
        <Link
              href="https://discord.com/invite/vee94km4Wh"
              target="_blank"
              className={cn(buttonVariants())}
            >
              Join Discord Community
            </Link>
        </div>

        <div className="flex items-center justify-center dark:text-white text-gray-700">
          <a
            href="/"
            className={cn(
              "mr-4 font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Home
          </a>
          <a
            href="/batch/learn/html/basic"
            className={cn(
              "mr-4 font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Learn
          </a>
          
          <a
            href="/batch/build/react/fundamentals"
            className={cn(
              "mr-4  font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Build
          </a>
          <a
            href="/batch/hire/hire"
            className={cn(
              "ml-4 font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Hire
          </a>
        </div>
      </div>
    </footer>
  );
}
