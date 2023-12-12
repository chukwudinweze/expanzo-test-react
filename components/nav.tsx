"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import UserAuthentication from "./auth/auth";
import Logo from "./logo";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  const isContactUrl = pathname.includes("contact");
  const router = useRouter();

  return (
    <nav className="w-full flex items-center h-[50px] bg-brandColor text-white">
      <div className="flex justify-center space-x-5 font-semibold mr-auto">
        <FontAwesomeIcon icon={faBars} size="xl" color="#54C9B2" />
        <button
          onClick={() => router.push("/")}
          className="text-[12px] hidden md:flex"
        >
          DASHBOARD
        </button>
        <button
          onClick={() => router.push("/contact")}
          className="text-[12px] hidden md:flex"
        >
          CONTACT
        </button>
      </div>
      <button onClick={() => router.push("/")} className="hidden md:flex">
        {isContactUrl && <Logo variant="light" size="sm" />}
      </button>
      <div className="ml-auto">
        <UserAuthentication />
      </div>
    </nav>
  );
};

export default Nav;
