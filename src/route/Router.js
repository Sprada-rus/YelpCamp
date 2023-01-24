import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import ErrorPage from "../pages/ErrorPage";
import MainListPage from "../pages/MainList/MainListPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";


export const DomRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={ <ErrorPage /> }>
            <Route index element={ <LandingPage /> }/>
            <Route path="list" element={ <MainListPage/> }/>
            <Route path="login" element={ <LoginPage /> } />
            <Route path="sign-up" element={ <RegistrationPage /> } />
        </Route>
    )
);