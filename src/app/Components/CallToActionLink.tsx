import Link from "next/link";
import { CallToActionLinkProps } from "typings";

const CallToActionLink = ({ href, text }: CallToActionLinkProps) => {
  return (
    <Link
      href={href}
      className="bg-pink-700 hover:bg-pink-600 transition duration-200 text-white py-3 px-6 text-2xl font-bold"
    >
      {text}
    </Link>
  );
};

export default CallToActionLink;
