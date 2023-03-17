import App from "./App";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

const Routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "login",
        element: <Login />,
    },
]
export default Routes