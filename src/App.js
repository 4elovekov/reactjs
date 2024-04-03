import React, {useEffect, useState} from "react";
import "./styles/App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Navbar from "./components/UI/Navbar/Navbar";
import {AuthContext} from "./context";
import AppRouter from "./components/AppRouter";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem("auth")) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
