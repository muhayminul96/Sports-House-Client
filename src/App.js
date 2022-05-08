import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFoundError from "./Pages/NotFoundError/NotFoundError";
import Header from "./Pages/shared/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import RequireAuth from "./RequireAuth";
import Footer from "./Pages/shared/Footer/Footer";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import AddItem from "./Pages/AddItem/AddItem";
import ManageIten from "./Pages/ManageItem/ManageItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Pages/Blog/Blogs/Blogs";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route path="/qusetion" element={<Blogs></Blogs>}></Route>
        <Route
          path="/item/:itemId"
          element={
            <RequireAuth>
              <ItemDetails />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/name"
          element={
            <RequireAuth>
              <NotFoundError />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageIten />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFoundError></NotFoundError>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
