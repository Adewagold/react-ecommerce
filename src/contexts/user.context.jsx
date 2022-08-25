import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";
// as the actual value you want to access
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: ()=>null
});

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value={currentUser, setCurrentUser};
    //Sign out when the component mounts
    // signOutUser();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user)=>{
            if(user){
                await createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        
            // console.log(user);
        });
        return unsubscribe
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
