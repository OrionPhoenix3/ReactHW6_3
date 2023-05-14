import { useState } from "react";
import { useDispatch } from "react-redux";
import { createFilm } from "../redux/reducers/filmsSlice";

const Form = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({title: ''})

    const onSubmit = (e) => {
        e.preventDefault()

        const {title} = input

        if(!title.trim()) {
            return 
        }

        const newFilm = {
            title,
            id: Date.now().toString()
        }

        dispatch(createFilm(newFilm))

        setInput({title: ''})
    }

    const inputHandler = (e) => {
        setInput({
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <h3>Что я хочу посмотреть?</h3>
            <input
                type="text"
                placeholder="Введите название"
                value={input.title}
                onChange={inputHandler}
                name="title"
                className="input"
            />
            <button className="btn" type="submit">Добавить фильм</button>
        </form>
    )
}

export default Form