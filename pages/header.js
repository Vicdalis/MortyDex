
export default function Header(props) {
    return(
        <div>
            <h1 className={props.styles.title}>
                Bienvenido a <a href="https://nextjs.org">MortyDex</a>
            </h1>

            <p className={props.styles.description}>
                Una wiki con información de todos los personajes de <code>Rick & Morty</code> alimentada por <a target='_blank' href="https://rickandmortyapi.com">Rick and Morty API</a>
            </p>
        </div>
    );
}