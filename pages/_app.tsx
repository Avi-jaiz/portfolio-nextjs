import { AppTheme } from "@/AppTheme";
import "@/styles/globals.css";
import { theme } from "antd";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

interface ThemeType {
  theme: string;
  setTheme: string | (() => string);
}

export const ThemeContext = createContext<any>({} as ThemeType);

export default function App({ Component, pageProps }: AppProps) {
  
  const [theme, setTheme] = useState<{} | (() => string)>("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
}
