import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Theme from "./components/Theme";
import UseStateCounter from "./components/UseStateCounter";
import News from "./components/News";

function App() {
  return (
    <>
      
      <NavBar />
      <Routes>
        <Route path="/theme" element={<Theme/>}></Route>
        <Route path="/counter" element={<UseStateCounter/>}></Route>
      </Routes>
      <News/>
    </>
  );
}

export default App;
