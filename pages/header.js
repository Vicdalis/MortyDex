
export default function Header(props) {
    return(
        <div className="m-1">
            <h1 className={props.styles.title}>
                Welcome to <span className="text-lime-300">MortyDex</span>
            </h1>

            <p className={props.styles.description}>
                Una wiki con información de todos los personajes de <strong className="text-lime-200">Rick & Morty</strong> alimentada por <a target='_blank' className="font-medium text-sky-500 hover:underline decoration-1" href="https://rickandmortyapi.com">Rick and Morty API</a>
            </p>
        </div>
    );
}