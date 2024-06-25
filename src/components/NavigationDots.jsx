import React from "react";
import { useTheme } from "../context/themeProvider";

const NavigationDots = ({ active }) => {
  const { theme } = useTheme();
  return (
    <div className={`app__navigation ${theme}`}>
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            key={item + index}
            className="app__navigation-dot"
            href={`#${item}`}
            style={active === item ? { backgroundColor: "#cf0a30" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
