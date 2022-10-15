// import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/routes/PrivateRoute";
import Orders from "./components/Orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <Orders></Orders>
            </PrivateRoute>
          ),
        },
        { path: "/home", element: <Home></Home> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
