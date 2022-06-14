import { AppContainer } from "./style";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Body from "./components/Body";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <AppContainer>
      <div className="bg-pattern"></div>
      <Header theme={isDark} setTheme={setIsDark} />
      <Body />
    </AppContainer>
  );
}

export default App;
