import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import "./styles/Utilities.scss";


function App() {
  return (
    <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>

      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
