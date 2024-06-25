import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import { useTheme } from "../context/themeProvider";

export const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    console.log(classNames);
    const date = new Date();
    const { theme } = useTheme();
    return (
      <div id={idName} className={`app__container ${classNames} ${theme}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@{date.getFullYear()} AMAN</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
