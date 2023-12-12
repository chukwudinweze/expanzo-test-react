import Link from "next/link";

interface FooterLinkItemProps {
  label: string;
  link: string;
}
const FooterLinkItem = ({ label, link }: FooterLinkItemProps) => {
  return (
    <li className="font-bold">
      <Link href={link} className="capitalize">
        {label}
      </Link>
    </li>
  );
};

export default FooterLinkItem;
