import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { getGoogleAccessToken } from "./utils/localStorage";

function App() {
  const googleAccessToken = getGoogleAccessToken();
  if(!googleAccessToken) {
    //    return <Navigate to='/login'/>;
  }

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
