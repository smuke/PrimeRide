import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discover from "./pages/discover/Discover.tsx";
import Login from "./pages/login/Login.tsx";
import Current from "./pages/current/Current.tsx"
import Profile from "./pages/profile/Profile.tsx"
import UserContext from "./context/UserContext.ts";

const router = createBrowserRouter([
    { path: "/", element: <Discover /> },
    { path: "/login", element: <Login /> },
    { path: "/current", element: <Current />},
    { path: "/profile", element: <Profile />}

]);

function App() {
    return (
        <UserContext.Provider value={1}>
            <RouterProvider router={router} />
        </UserContext.Provider>
    );
}

export default App;
