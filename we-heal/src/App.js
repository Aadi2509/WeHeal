import "./App.scss";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Book from "./pages/Book/Book";
import Tests from "./pages/Tests/Tests";
import Tips from "./pages/Tips/Tips";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Logout from "./pages/Logout/Logout";
import { createContext, useReducer } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { intitialState,reducer } from "./Reducer/useReducerHook";


export const UserContext = createContext();


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tests",
        element: <Tests />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      {
        path: "/tips",
        element: <Tips />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);





const App = () => {
  
const [state,dispatch] = useReducer(reducer,intitialState)

  return (
    <div>
      <UserContext.Provider value={{state,dispatch}}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
