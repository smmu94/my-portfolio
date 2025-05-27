import Link from "next/link";
import GitHubIcon from "public/svgs/github.svg";
import LinkedInIcon from "public/svgs/linkedin.svg";
import MailIcon from "public/svgs/mail.svg";
import MusicPlayer from "./components/musicPlayer";
import { SOCIAL_LINKS } from "./constants";

const TopActionsBar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <MusicPlayer />
      <ul className="flex space-x-4 md:space-x-8">
        <li>
          <Link href={SOCIAL_LINKS.github} target="_blank" aria-label="GitHub">
            <GitHubIcon className="w-12 h-12 fill-primary md:w-16 md:h-16" />
          </Link>
        </li>
        <li>
          <Link
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-12 h-12 fill-primary md:w-16 md:h-16" />
          </Link>
        </li>
        <li>
          <Link href={SOCIAL_LINKS.email} aria-label="Email">
            <MailIcon className="w-12 h-12 fill-primary md:w-16 md:h-16" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopActionsBar;
