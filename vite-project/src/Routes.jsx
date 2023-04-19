import App from "./App";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Body from "./Components/Home/Body/Body";
import Content from "./Components/Home/Content/Content";

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
    {
        path: "content",
        element: <Content />,
    }, {
        path: "body",
        element: <Body />,
    },


]
export default Routes