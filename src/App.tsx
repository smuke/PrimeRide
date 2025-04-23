import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discover from "./pages/discover/Discover.tsx";
import Login from "./pages/login/Login.tsx";

const router = createBrowserRouter([
    { path: "/", element: <Discover /> },
    { path: "/login", element: <Login /> },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
