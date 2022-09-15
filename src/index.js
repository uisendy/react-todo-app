import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import TodoContainer from './components/TodoContainer';
import About from './components/pages/About';
import NotMatch from './components/pages/NotMatch';
import AboutPages from './components/pages/AboutPages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />}>
          <Route path=":aboutPage" element={<AboutPages />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
