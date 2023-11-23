import React from 'react';
import Navegador from './Vista/Navegador';
import Login from './Vista/Login';
import { Outlet } from 'react-router-dom';
import Footer from './Vista/Footer';

const App = () => {

    return (
        <>
            <Login></Login>
            <Navegador></Navegador>
            <div style={{marginTop:'100px'}}>
                <Outlet />
            </div>
            <Footer></Footer>
        </>
    )
};

export default App;