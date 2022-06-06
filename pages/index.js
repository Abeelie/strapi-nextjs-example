import { useHomePage } from '../hooks/useHomePage';
import Hero from '../componets/hero/Hero';
import { Spinner } from "react-bootstrap";
import styles from "../styles/home.module.css";
import About from '../componets/about/about';

export default function Home() {
  const {data, loading, error} = useHomePage();

  if(loading) return <div align="center"><Spinner className={styles.spinner} animation="border" /></div>
  
  if(error) return <div>error</div>

  return (
    <div className={""}>
      <Hero data={data} />
      <About data={data} />
    </div>
  )
}

