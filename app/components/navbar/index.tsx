import HomeIcon from "public/svgs/arcade.svg";
import ExperienceIcon from "public/svgs/computer.svg";
import ProjectsIcon from "public/svgs/disquete.svg";
import AboutIcon from "public/svgs/girl.svg";
import Card from "./components/card";
import { routes } from "./constants";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 shadow-md p-4 md:p-6 flex justify-center gap-2 md:gap-8 lg:gap-16 items-center z-30">
      <Card route={routes.home.route} label={routes.home.label}>
        <HomeIcon className="w-full h-full" />
      </Card>
      <Card route={routes.about.route} label={routes.about.label}>
        <AboutIcon className="w-full h-full" />
      </Card>
      <Card route={routes.experience.route} label={routes.experience.label}>
        <ExperienceIcon className="w-full h-full" />
      </Card>
      <Card route={routes.projects.route} label={routes.projects.label}>
        <ProjectsIcon className="w-full h-full" />
      </Card>
    </nav>
  );
};

export default Navbar;
