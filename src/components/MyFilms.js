import Film from './Film'
import { useSelector} from 'react-redux'

const MyFilms = () => {
    const films = useSelector(state => state.films.films)

    if(!films.length) {
        return (
        <div>
            <h3>Мой список фильмов к просмотру:</h3>
            <div>К сожалению, список пуст</div>
        </div>)
    }

    return (
        <div>
            <h4>Мой список фильмов к просмотру:</h4>
            {films.map(film => (
                <Film key={film.id} film={film}></Film>
            ))}
        </div>
    )
}

export default MyFilms