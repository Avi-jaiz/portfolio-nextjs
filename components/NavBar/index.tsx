import React, { useContext } from "react";
import type { NextPage } from "next";
import { BsFillMoonFill } from "react-icons/bs";

import menu from "@/constants";
import { ThemeContext } from "@/pages/_app";
import { AppTheme } from "@/AppTheme";
import Image from "next/image";

const NavBar: NextPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  const themeStyles: AppTheme = {
    light: {
      backgroundColor: "#FDE047",
      color: "black",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
    },
    common: {
      transition: "all ease 0.5s",
    },
    nameProfile: {
      backgroundColor: "#FFFF55",
      color: "black",
    },
  };

  const themeSetter = {
    ...themeStyles.common,
    ...(theme == "light" ? themeStyles.light : themeStyles.dark),
  };

  return (
    <div style={themeSetter} className="flex flex-col gap-5 ">
      <ul className="flex gap-5 justify-around text-2xl p-2 cursor-pointer  items-center">
        {menu.map((lists) => (
          <li
            key={lists.id}
            className="font-playBall text-4xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-900 hover:scale-110 hover:transition-all hover:delay-150 hover:ease-in-out"
          >
            <a href={lists.link}> {lists.list}</a>
          </li>
        ))}
        <div onClick={handleTheme}>
          <div className="relative w-10 h-10 flex justify-center items-center">
            <Image
              src={theme == "light" ? `/icons/sun.png` : `/icons/moon5.png`}
              alt="theme"
              width={50}
              height={50}
            />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
