import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import ListList from "../src/pages/listList/listList"
import { AuthContext } from "./context/authContext/AuthContext";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function App() {
  const {user} = useContext(AuthContext);

  return (
    <>
    <ToastContainer/>
    <Router>
      <Switch>
        <Route path="/login"> {user ? <Redirect to="/" /> : <Login />}</Route>
        {user ?
        <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/movies">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/lists">
            <ListList />
          </Route>
          <Route path="/list/:listId">
            <List />
          </Route>
          <Route path="/newlist">
            <NewList />
          </Route>
        </div></> : <Redirect to="/login"/>}
      </Switch>
    </Router>
    </>
  );
}

export default App;
