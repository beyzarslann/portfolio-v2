"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaLink,
} from "react-icons/fa";

const links = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/beyzarslann" },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/beyza-arslan-21357a20a/",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/byzrslnnn",
  },
  {
    label: "E-posta",
    icon: FaEnvelope,
    href: "mailto:beyzarslan865@gmail.com",
  },
  { label: "Telefon", icon: FaPhone, href: "tel:+905078833693" },
  { label: "Bionluk", icon: FaLink, href: "https://bionluk.com/beyzarslannn" },
];

export default function Contact() {
  return (
    <TooltipProvider>
      <Dock direction="middle">
        {links.map((link) => (
          <DockIcon key={link.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  <link.icon className="size-6" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
}
