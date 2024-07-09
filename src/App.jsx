// component - templates
import { Route, Routes } from "react-router-dom";
import HomePage from "./templates/HomePage";
import AllArticlesPage from "./templates/AllArticlesPage";
import ArticelseDetailse from "./templates/ArticelseDetailse";
import ScrollToTop from "./components/ScrollTop";
import Contact from "./module/Contact";
import About from "./module/About";
import Location from "./templates/Location";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/articles" element={<AllArticlesPage />} />
        <Route path="/:name" element={<ArticelseDetailse />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
