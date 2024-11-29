import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './page/Login';
import Book from './page/Book';
import LayoutDefault from './Layout';
import Dashboard from './page/Dashboard';
import Employee from './page/Employee';
import Customer from './page/Customer';
import WareHouse from './page/Warehouse';
import Invoice from './page/Invoice';


import Home from './page/Home';
import LoginUser from './page/Login user';
import Register from './page/Register';
import Listing from './page/Listing';
import BookDetail from './page/Book detail';
import Cart from './page/Cart';
import Payment from './page/Payment';
import ScrollToTop from './utils/scrolltop';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        {/* User */}
       
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/book-detail" element={<BookDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/book" element={<LayoutDefault />}>
          <Route path='view' element={<Book />} />
          <Route path='overview' element={<Dashboard />} />
          <Route path='employee' element={<Employee />} />
          <Route path='invoice' element={<Invoice />} />
          <Route path='warehouse' element={<WareHouse />} />
          <Route path='customer' element={<Customer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
