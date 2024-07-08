// component - templates
import { Route, Routes } from "react-router-dom";
import HomePage from "./templates/HomePage";
import AllArticlesPage from "./templates/AllArticlesPage";
import ArticelseDetailse from "./templates/ArticelseDetailse";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<AllArticlesPage />} />
        <Route path="/:name" element={<ArticelseDetailse />} />
      </Routes>
    </div>
  );
}

export default App;
