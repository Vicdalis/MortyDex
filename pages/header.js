
export default function Header(props) {
    return(
        <div>
            <h1 className={props.styles.title}>
                Bienvenido a <span className="text-lime-200">MortyDex</span>
            </h1>

            <p className={props.styles.description}>
                Una wiki con información de todos los personajes de <code>Rick & Morty</code> alimentada por <a target='_blank' className="font-medium text-sky-500 hover:underline decoration-1" href="https://rickandmortyapi.com">Rick and Morty API</a>
            </p>
        </div>
    );
}