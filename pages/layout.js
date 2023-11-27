import styles from '../styles/Style.module.css';
import Head from 'next/head';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { useEffect, useState } from 'react';

export default function Layout ({ children }) {
  // const [client, setClient] = useState(null);

  // useEffect(() => {

    loadDevMessages();
    loadErrorMessages();
    
    const client = new ApolloClient({
        uri: "https://rickandmortyapi.com/graphql",
        cache: new InMemoryCache()
    });

    // setClient(client);
  // }, []);

    return (
      <div>
        {
          client &&
            <ApolloProvider client={client}>
              <div className={styles.container}>
                <Head>
                  <title>MortyDex</title>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.main_background}>
                  {children}
                </main>
                <footer className="h-12">
                    <a
                      href="https://www.linkedin.com/in/vicdalis-anazco/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className='!text-white'
                    >
                      2023 by {' '} Vicdalis Añazco
                    </a>
                  </footer>
              </div>
            </ApolloProvider>
        }
      </div>
    )
}