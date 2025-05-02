import { createContext } from "react";

const UserContext = createContext<number | null>(0);

export default UserContext;