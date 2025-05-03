import { createContext, ReactNode, useState } from "react";

type UserContextType = {
    userId: number | null;
    setUserId: (id: number | null) => void;
}
export const UserContext = createContext<UserContextType>({
    userId: null,
    setUserId: () => {},
});

type UserProviderProps = {
    children: ReactNode;
}
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [userId, setUserId] = useState<number | null>(null);

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};

export default {
    UserContext,
    UserProvider,
}
