import { createRoot } from 'react-dom/client'
import './index.sass'
import Layout from './Layout.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home.tsx';
import MyProjects from './pages/MyProjects.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="myprojects" element={<MyProjects />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
