import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/const";
import {Context} from "../index";
import { useContext } from 'react';
// import {observer} from "mobx-react-lite";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
           {isAuth && authRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} element={<Component/>} exact />
           )}
           {publicRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} element={<Component/>} exact />
           )}
           <Route path="*" element={<Navigate to={SHOP_ROUTE} />}/>
        </Routes>
     );
};

export default AppRouter;



