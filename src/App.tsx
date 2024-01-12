import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ListPage } from "./pages/ListPage";
import { Home } from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <div className="max-w-xl mx-auto container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ListPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
