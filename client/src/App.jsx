import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [toggledrawersidebar, setToggledrawersidebar] = useState({ display: "none" });

  const toggledrawer = () => {
    setToggledrawersidebar((prev) => ({
      display: prev.display === "none" ? "flex" : "none",
    }));
  };

  const [editcreatechannelbtn, setEditcreatechannelbtn] = useState(false);
  const [videouploadpage, setVideouploadpage] = useState(false);

  return (
    <>
     <Router>
     <Navbar setEditcreatechannelbtn={setEditcreatechannelbtn} toggledrawer={toggledrawer} />
     </Router>
    </>
  );
}

export default App;
