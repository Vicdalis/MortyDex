
import styles from '../styles/Style.module.css';
import Header from './header';
import GridContainer from './gridContainer';
import Layout from './layout';

export default function Home() { 
  
  return (
    <Layout >
      <Header styles={styles} />
      <GridContainer />
    </Layout>
  );
}
