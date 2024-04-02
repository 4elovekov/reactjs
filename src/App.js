import React from "react";
import "./styles/App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Navbar from "./components/UI/Navbar/Navbar";
import {AuthContext} from "./context";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="posts" element={<Posts />}/>
                <Route path="about" element={<About />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
