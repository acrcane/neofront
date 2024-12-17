import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import SignUp from "pages/AuthPages/SignUp/SignUp";
import SignIn from "pages/AuthPages/SignIn/SignIn";

export const App = () => (
    <>
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </>
);
