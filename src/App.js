import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
