import { FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="bold-18 whitespace-nowrap text-maroon pb-4">{title}</h4>
      {children}
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-maroon text-center py-32">
      <img
        src="/overview/hb_logotype.svg"
        alt="Company Logo"
        className="mx-auto h-16"
      />
      <p className="mt-4">
        &copy; {currentYear} HavenBakes. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
