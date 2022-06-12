import "./App.css";
import Button from "./components/Button";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import BasicSwitches from "./components/BasicSwitches";
import { getUser } from "./api/apiBasicAuth";
import { CancelToken } from "apisauce";
import LoginForm from "./forms/LoginForm";
import { postUser } from "./api/user";
import BookForm from "./forms/BookForm";
import apiCategory from "./api/apiUser";
import { getAllBooks } from "./api/apiBook";
import { getOneBook } from "./api/apiBook";
import { createUser } from "./api/user";
import RegisterForm from "./forms/RegisterForm";
import DisplayAllBooksGrid from "./components/displayAllBooksGrid";
// import AdminMenu from './components/AdminMenu'
import { putUser } from "./api/apiUser";
import EditProfileForm from "./forms/EditProfileForm";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import CartPage from "./views/CartPage";
import Register from "./views/Register";
import Edit from "./views/Edit";
import SingleBook from "./views/SingleBook";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import Logout from "./views/logout";

const HomePage = () => {
  return <h1>Welcome to the Bookstore!</h1>;
};

function App() {
  const { user } = useContext(AppContext);
  console.log("🚀 ~ file: App.js ~ line 37 ~ App ~ user", user);

  return (
    <>
      <NavBar>
        <Box sx={{ minHeight: "90vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/shop" element={<DisplayAllBooksGrid />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Edit" element={<Edit />} />
            <Route path="/shop/:id" element={<SingleBook />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Box>
      </NavBar>
    </>
  );
}

export default App;
