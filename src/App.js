import React from "react";
import Home from "./pages/home/Home";
import "app.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import PostView from "./pages/view/postView/View";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/postView">
                    <PostView />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}
