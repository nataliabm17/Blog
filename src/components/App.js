import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
