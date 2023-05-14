import Film from "./Film"
import { useSelector, useDispatch } from "react-redux"
import { fetchFilms } from "../redux/reducers/fetchFilms"

const CinemaFilms = () => {
    const dispatch = useDispatch()
    const {fetchedFilms: films, isLoading, error} = useSelector(state => state.films)

    if (isLoading) return <p className="loader">Loading...</p>

    if (error) return (
        <div>
            ERROR: {error}
            <button className="btn" onClick={() => {dispatch(fetchFilms())}}>Загрузить фильмы</button>
        </div>
    )

        if(!films.length) {
            return (
                <div>
                    <h3>Что интересного в CinemaCity:</h3>
                    <p>Загрузите фильмы:</p>
                    <button className="btn" onClick={() => {dispatch(fetchFilms())}}>Загрузить фильмы</button>
                </div>
            )
        }

    return (
        <div>
            <h3>Что интересного в CinemaCity:</h3>
            {films && films.map(film => (
                <Film key={film.id} film={film}></Film>
            ))}
            <button className="btn" onClick={() => {dispatch(fetchFilms())}}>Загрузить фильмы</button>
        </div>
    )
}

export default CinemaFilms