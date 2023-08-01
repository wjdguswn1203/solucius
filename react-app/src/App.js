import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

import "primereact/resources/themes/lara-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
      <Router>
          <Routes>
              {/* 로그인 페이지 */}
              <Route path="/" element={<Login />} />

              {/* 기타 페이지 */}
              <Route path="/dashboard" element={<Home />} />
              {/* 더 많은 페이지들을 여기에 추가할 수 있습니다. */}

              {/* 로그인 이외의 경로일 경우 404 페이지 또는 리다이렉트 등을 처리할 수 있습니다. */}
          </Routes>
      </Router>
  );
}

export default App;
