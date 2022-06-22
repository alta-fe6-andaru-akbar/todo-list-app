import "./App.css";
import TodoList from "./pages/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:tasksId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
