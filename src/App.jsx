import { Route, Routes } from "react-router";
import "./App.css";
import { SideNav } from "./Components/SideNav";
import { Home } from "./Pages/Home";
import { Categories } from "./Pages/Categories";

function App() {
  return (
    <div style={{display : "flex", width : "95vw", height : "95vh", gap : "40px", paddingLeft : "20px"}}>
      <div>
        <h2>Your Second Youtube 🎦</h2>
        <SideNav/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories/:catID" element={<Categories/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;