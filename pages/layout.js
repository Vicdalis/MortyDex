import styles from '../styles/Style.module.css';
import Head from 'next/head';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { useEffect, useState } from 'react';
import { Cairo } from 'next/font/google'

const font = Cairo({ subsets: ['latin'], weight: '700', })

export default function Layout ({ children }) {

    loadDevMessages();
    loadErrorMessages();
    
    const client = new ApolloClient({
        uri: "https://rickandmortyapi.com/graphql",
        cache: new InMemoryCache()
    });

    return (
      <div className={font.className}>
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
                <footer className="h-12 text-white">
                    <a
                      href="https://www.linkedin.com/in/vicdalis-anazco/"
                      target="_blank"
                      rel="noopener noreferrer"
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