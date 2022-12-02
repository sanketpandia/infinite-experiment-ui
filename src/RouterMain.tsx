import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/login";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
};

export default RouterMain;