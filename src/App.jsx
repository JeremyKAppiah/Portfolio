import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/home";
import { NotFound } from "./pages/NotFound";
import './index.css'; // Ensure Tailwind CSS is imported
import { Toaster } from "../src/ui/toaster";
function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
