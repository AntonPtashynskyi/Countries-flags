import { useState, useEffect } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { StyledContainer } from "../Container/Container";
import {
  StyledHeader,
  StyledTitle,
  StyledWrapper,
  ThemeSwitcher,
} from "./StyledHeader";

function Header() {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledWrapper>
          <StyledTitle>Where is the world?</StyledTitle>
          <ThemeSwitcher onClick={toggleTheme}>
            {isDark ? (
              <IoMoonSharp size={"14px"} />
            ) : (
              <IoMoonOutline size={"14px"} />
            )}
            {isDark ? "Dark" : "Light"} Theme
          </ThemeSwitcher>
        </StyledWrapper>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;
