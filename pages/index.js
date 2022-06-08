import { useHomePage } from '../hooks/useHomePage';
import Hero from '../componets/hero/Hero';
import { Spinner } from "react-bootstrap";
import About from '../componets/about/about';
import Head from "next/head";

export default function Home() {
  const {data, loading, error} = useHomePage();

  if(loading) return (
    <div align="center">
      <Spinner style={{height: "200px", width: "200px", marginTop: "200px"}} animation="border" />
    </div>
  )
  
  if(error) return <div>error</div>

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Hero data={data} />
      <About data={data} />
    </div>
  )
}

