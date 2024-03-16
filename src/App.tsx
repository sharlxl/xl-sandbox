import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Modal } from "./pages/Modal";
import MyCalculator from "./pages/MyCalculator";

export const AuthContext = createContext({});

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={isLogin}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home setIsLogin={setIsLogin} />} />
            <Route path="/modal" element={<Modal />}></Route>
            <Route path="/calculator" element={<MyCalculator />}></Route>
          </Route>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
