import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import AccountFind from "./components/AccountFind";
import Join from "./components/Join";

import "primereact/resources/themes/lara-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import './App.css';

function App() {
  return (
      <Router>
          <Routes>
              {/* 로그인 페이지 */}
              <Route path="/" element={<Login />} />

              {/* 기타 페이지 */}
              <Route path="/dashboard" element={<Home />} />
              {/* 더 많은 페이지들을 여기에 추가할 수 있습니다. */}

              <Route path="/AccountFind" element={<AccountFind />} />

              <Route path="/SignUp" element={<Join />} />

          </Routes>
      </Router>
  );
}

export default App;
