import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import CreateSite from "./pages/CreateSite";
import Login from "./pages/Login";
import ShowSite from "./pages/ShowSite";
import Signup from "./pages/Signup";

import Sites from "./pages/Sites";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Sites />}></Route>
        </Routes>
        <Routes>
          <Route path="/create-site" element={<CreateSite />}></Route>
        </Routes>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <Routes>
          <Route path="/:siteId" element={<ShowSite />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
