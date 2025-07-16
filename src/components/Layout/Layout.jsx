import React from 'react';

const MainLayout = ({children}) => {
    return (
        <main>
            <div>{children}</div>
        </main>
    );
};

export default MainLayout;