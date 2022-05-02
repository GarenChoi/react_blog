import React from "react";
import Home from "./pages/home/Home";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import View from "./pages/view/View";
import Join from "./pages/join/Join";
import Write from "./pages/write/Write";
import Mypage from "./pages/mypage/Mypage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/Join">
                    <Join />
                </Route>
                <Route path="/Post">
                    <View />
                </Route>
                <Route path="/Write">
                    <Write />
                </Route>
                <Route path="/Mypage">
                    <Mypage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}
