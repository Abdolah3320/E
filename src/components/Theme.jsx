import { useContext } from "react";
import { ThemeContext } from "../context/ThgemeToggler";

export default function Theme() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`${
          theme == "light" ? "" : "bg-dark"
        } d-flex justify-content-center align-items-center`}
        style={{ height: "100vh" }}
      >
        <button className={`btn btn-${theme}`} onClick={toggleTheme}>
          {theme}
        </button>
      </div>
    </div>
  );
}
