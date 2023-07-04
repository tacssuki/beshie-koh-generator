import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { ThemeContext, themes } from "./components/ThemeContext";

function App() {
  const [theme, setTheme] = React.useState(themes.light);

  const toggleTheme = () =>
    setTheme(theme === themes.dark ? themes.light : themes.dark);

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        <Header />
        <Body toggleTheme={toggleTheme} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
