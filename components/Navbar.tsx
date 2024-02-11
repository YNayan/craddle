import Link from "next/link";
import { IoSunnySharp } from "react-icons/io5";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <nav className="shadow-lg dark:shadow-dark ">
      <div className="flexBetween max-container padding-container relative py-1 lg:py-3 z-30">
        <Link
          href={"/"}
          className="bold-18 xl:bold-38 uppercase font-light-gradient dark:font-dark-gradient"
        >
          Craddle
        </Link>

        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
