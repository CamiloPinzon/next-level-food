import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import NavLink from "../nav-link/nav-link";

import LogoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={LogoImage}
            alt="NextLevel Food Logo"
            className={classes.logoImg}
            priority
          />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">BrowseMeals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
