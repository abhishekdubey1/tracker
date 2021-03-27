import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Steps from "./Components/Steps";
import Stats from "./Components/Stats";
import Plans from "./Components/Plans";
import History from "./Components/History";
const Tabs = ["Home", "Steps", "Plans", "Stats", "History"];
function App() {
  const [activeTab, setActiveTab] = useState(Tabs[1]);
  const Header = () => (
    <header>
      <h1>Workout</h1>
      <div className="settings">
        <img
          className="filter-icon"
          src={`${process.env.PUBLIC_URL}/assets/images/filter.webp`}
          alt="filter-icon"
        />
        <span className="kebab-icon">⋮</span>
      </div>
    </header>
  );
  const Nav = () => (
    <nav>
      <ul className="tabs-container">
        {Tabs.map((el) => (
          <li
            key={el}
            onClick={(e) => setActiveTab(el)}
            className={`${activeTab === el ? "active-tab " : ""}tabs`}
          >
            {el}
          </li>
        ))}
      </ul>
    </nav>
  );
  const Main = () => {
    if (activeTab === "Home") {
      return <Home />;
    } else if (activeTab === "Steps") {
      return <Steps />;
    } else if (activeTab === "Stats") {
      return <Stats />;
    } else if (activeTab === "Plans") {
      return <Plans />;
    } else if (activeTab === "History") {
      return <History />;
    } else {
      return <h1>404! Not Found</h1>;
    }
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
