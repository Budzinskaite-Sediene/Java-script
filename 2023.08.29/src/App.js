import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Home from "./Pages/Home";
import Meal from "./Pages/Meal";
// import Ingredient from "./pages/Ingredient";
// import Area from "./pages/Area";
import Category from "./Pages/Category";
// import FilterBy from "./pages/FilterBy";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/meal/:id" element={<Meal />} />;
          <Route path="/category/:name" element={<Category />} />;
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
