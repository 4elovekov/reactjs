import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
/*    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }*/

    return (
        <Routes>
            {privateRoutes.map((route, index) =>
                <Route
                    key={index}
                    path={route.path}
                    element={<route.element />}
                />
            )}
{/*            <Route path="" element={<Posts />}/>
            <Route path="posts" element={<Posts />}/>
            <Route path="posts/:id" element={<PostIdPage />}/>
            <Route path="about" element={<About />}/>
            <Route path="*" element={<Error />}/>*/}
        </Routes>
    );
};

export default AppRouter;