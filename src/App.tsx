import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discover from "./pages/discover/Discover.tsx";
import Login from "./pages/login/Login.tsx";
import Current from "./pages/current/Current.tsx"

const router = createBrowserRouter([
    { path: "/", element: <Discover /> },
    { path: "/login", element: <Login /> },
    { path: "/current", element: <Current />}
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
