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
    href: "https://linkedin.com/in/beyzarslan",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/beyzarslan",
  },
  { label: "E-posta", icon: FaEnvelope, href: "mailto:beyzarslan@gmail.com" },
  { label: "Telefon", icon: FaPhone, href: "tel:+905xxxxxxxxx" },
  { label: "Bionluk", icon: FaLink, href: "https://bionluk.com/beyzarslan" },
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
                  className="text-white hover:text-green-400 transition-colors"
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
