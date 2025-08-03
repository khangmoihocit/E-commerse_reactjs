import React, { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null);

    const userId = Cookies.get('userId');

    useEffect(()=>{

    });

    return (
        <StoreContext.Provider>
            {children}
        </StoreContext.Provider>
    );
};
