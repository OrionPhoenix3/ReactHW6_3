import React from "react";
import Form from "./components/Form";
import MyFilms from "./components/MyFilms"
import CinemaFilms from "./components/CinemaFilms";

function App() {
    return (
        <div className="app__container">
            <Form></Form>
            <MyFilms></MyFilms>
            <CinemaFilms></CinemaFilms>
        </div>
    )
}

export default App