import { useHomePage } from '../hooks/useHomePage';
import Hero from '../componets/hero/Hero';
import { Spinner } from "react-bootstrap";
import About from '../componets/about/about';

export default function Home() {
  const {data, loading, error} = useHomePage();

  if(loading) return (
    <div align="center">
      <Spinner style={{height: "200px", width: "200px", marginTop: "200px"}} animation="border" />
    </div>
  )
  
  if(error) return <div>error</div>

  return (
    <div className={""}>
      <Hero data={data} />
      <About data={data} />
    </div>
  )
}

