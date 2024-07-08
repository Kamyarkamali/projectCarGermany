// component - templates
import { Route, Routes } from "react-router-dom";
import HomePage from "./templates/HomePage";
import AllArticlesPage from "./templates/AllArticlesPage";
import ArticelseDetailse from "./templates/ArticelseDetailse";
import ScrollToTop from "./components/ScrollTop";
import Contact from "./module/Contact";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/articles" element={<AllArticlesPage />} />
        <Route path="/:name" element={<ArticelseDetailse />} />
      </Routes>
    </div>
  );
}

export default App;
