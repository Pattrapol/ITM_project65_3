import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "../src/pages/test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Book/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;