import Image from "next/image";

interface LogoProps {
  variant: "light" | "dark";
  size?: "default" | "sm";
}
const Logo = ({ variant, size }: LogoProps) => {
  return (
    <div>
      <Image
        src={`${
          variant === "dark" ? "/logo-expanzo-black.svg" : "/logo-expanzo.svg"
        }`}
        alt="expanzo logo"
        height={size === "sm" ? 60 : 150}
        width={size === "sm" ? 60 : 150}
      />
    </div>
  );
};

export default Logo;
