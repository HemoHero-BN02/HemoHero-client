import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";

//라우팅 페이지
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/mainpage" element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
