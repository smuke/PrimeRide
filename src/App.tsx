import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discover from "./pages/discover/Discover.tsx";
import Login from "./pages/login/Login.tsx";
import Current from "./pages/current/Current.tsx"
import Profile from "./pages/profile/Profile.tsx"
import { UserProvider } from "./context/UserContext";
import Vehicle from "./pages/vehicle/Vehicle.tsx";

const router = createBrowserRouter([
    { path: "/", element: <Discover /> },
    { path: "/login", element: <Login /> },
    { path: "/current", element: <Current />},
    { path: "/profile/:userId", element: <Profile />},
    { path: "/vehicle/:vehicleId", element: <Vehicle />},
]);

function App() {
    return (
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    );
}

export default App;
