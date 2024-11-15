import logo from './logo.svg';
import './App.css';
import Login from './page/Login';
import Book from './page/Book';
import LayoutDefault from './Layout';
import Dashboard from './page/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<LayoutDefault />}>
          <Route index element={<Book />} />
          <Route path='overview' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
