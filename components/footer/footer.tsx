import Image from "next/image";
import Logo from "../logo";
import Link from "next/link";
import FooterLinkItem from "./footer-link-item";

const footerLinks = [
  { label: "CONTACTS", link: "#" },
  { label: "PHONES", link: "#" },
  ,
  { label: "TOP SEARCH", link: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 h-[200px] flex items-center justify-center fixed bottom-0 left-0 space-x-5 md:space-x-28 lg:space-x-60 p-1 text-center">
      <Logo variant="dark" />
      <ul className="flex space-x-2 lg:space-x-10 text-[0.75rem] lg:text-[0.875rem]">
        {footerLinks.map((linkItem) => (
          <FooterLinkItem
            key={linkItem?.label}
            label={linkItem?.label!}
            link={linkItem?.link!}
          />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
