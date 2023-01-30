import type { NextPage } from "next";
import { useDebugValue, useState } from "react";
import { Button } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import Typed from "react-typed";
import { AppTheme } from "@/AppTheme";

const HomePage: NextPage = () => {
  const [rotate, setRotate] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

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
    ...(theme === "light" ? themeStyles.light : themeStyles.dark),
  };

  return (
    <div
      style={themeSetter}
      className=" flex gap-5 justify-center items-center  h-[100vh] bg-yellow-400 "
    >
      <div
        style={theme == "light" ? themeStyles.nameProfile : themeStyles.dark}
        className=" w-[45vw]"
      >
        <h3 className="font-playBall text-[3rem]">Hi , I am</h3>
        <h1 className="font-aveDisplay text-[2.5rem] text-purple-800">
          Avishekh Jaiswal,
          <span className="text-[1.5rem] ml-4 text-red-900 ">
            Frontend Developer
          </span>
        </h1>
        <div className="w-0 h-0 border-r-4">{/* */}</div>
        <div className="flex justify-around ">
          <motion.div
            animate={{ rotate: rotate ? 360 : 0 }}
            onHoverStart={() => setRotate(!rotate)}
          >
            <button className="text-transparent text-white bg-gradient-to-r from-purple-400 to-pink-600 p-[0.6rem] rounded-md font-semibold">
              Resume
            </button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, rotate: 360 }}>
            <button className="text-transparent text-white bg-gradient-to-r from-purple-600 to-pink-800 p-[0.6rem] rounded-md font-semibold">
              Lets Talk
            </button>
          </motion.div>
        </div>
        <div className="font-playBall tracking-[0.5rem]  text-2xl ">
          Skilled in
          <span className="text-[2rem] tracking-wider text-purple-600">
            <Typed 
              strings={["TypeScript", "React", "NextJS", "Tailwind"]}
              typeSpeed={15}
              backSpeed={10}
              loop
            />
          </span>
        </div>
      </div>

      <div
        className={
          theme == "light"
            ? `flex justify-center items-center bg-gradient-to-r from-purple-600 to-pink-800 w-[35vw] h-[35vh]  rounded-full`
            : `flex justify-center items-center bg-slate-900 shadow-white transition-all ease-in delay-150 w-[35vw] h-[35vh]  rounded-full`
        }
      >
        <motion.div
          whileHover={{ scale: 1.5 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <div className="w-45 h-45 relative ">
            <Image
              src={`/images/profile.jpg`}
              alt="profile-pic"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
