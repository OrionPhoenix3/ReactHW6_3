const Film = ({film}) => {

    if (!film.day && !film.time) {
        return (
            <div>
                <p>{film.title}</p>
            </div>
        )
    }

    return (
        <div>
            <p>{film.title}, {film.day} {film.time}</p>
        </div>
    )
}

export default Film