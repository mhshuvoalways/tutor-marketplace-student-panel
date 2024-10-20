"use client";

import Button from "@/app/components/common/button/Button1";
import DropDown from "@/app/components/common/header/DropDown";
import LogoImage from "@/public/images/logo.png";
import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menus = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Find tutors",
    url: "/tutors",
  },
];

const Header = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(true);

  const pathname = usePathname();

  const session = useSession();
  // console.log(session);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setPrevScrollY(currentScrollY);
      if (currentScrollY > prevScrollY) {
        setScrollDirection(false);
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header
      className={`bg-white shadow-sm z-20 py-5 transition-transform duration-500 ease-in-out fixed left-0 right-0 top-0 ${
        scrollDirection ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Link href="/">
          <Image src={LogoImage} alt="" className="w-44" />
        </Link>
        <div className="sm:flex justify-between items-center gap-6 hidden font-outfit">
          {menus.map((el) => {
            const isActive =
              el.url === "/" ? pathname === el.url : pathname.includes(el.url);
            return (
              <Link
                href={el.url}
                key={el.name}
                className={`hover:text-primary transition text-nowrap ${
                  isActive ? "text-primary" : ""
                }`}
              >
                {el.name}
              </Link>
            );
          })}
          {session.status === "loading" ? (
            <Button title={"Loading"} className={"!py-1.5"}></Button>
          ) : session.status === "authenticated" ? (
            <Link href={"/my-account"}>
              <Button title={"My Account"} className={"!py-1.5"}></Button>
            </Link>
          ) : (
            <Link href={"/login"}>
              <Button title={"Login"} className={"!py-1.5"}></Button>
            </Link>
          )}
        </div>
        <div className="block sm:hidden">
          <DropDown
            menuButton={
              <Menu className="bg-primary/90 text-white p-1.5 size-9 rounded hover:bg-primary" />
            }
            session={session}
            menus={menus}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
