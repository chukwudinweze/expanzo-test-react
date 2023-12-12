import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ContactPage = () => {
  return (
    <section className="text-center text-[0.875rem] mt-20 p-2">
      <h2 className="font-bold">Contact</h2>
      <div className="w-full flex justify-center">
        <div className="flex space-x-24 mt-4">
          <div>
            <div className="flex space-x-2 items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-lightGreen"
              />
              <p>Headquaters</p>
            </div>
            <p className="mt-6">
              DHO s.r.o. <br />
              Bořivojova 878/35 <br />
              130 00 praha 3
            </p>
          </div>
          <div>
            <div className="flex space-x-2 items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="  text-lightGreen"
              />
              <p>Email</p>
            </div>
            <div className="mt-6">
              <Link href="mailto:info@expanzo.com">info@expanzo.com</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
