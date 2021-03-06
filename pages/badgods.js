import BadGodsContent from "../componets/godscontent/BadGodsContent";
import { useBadGodsPage } from "../hooks/useBadGodsPage";
import { Spinner } from "react-bootstrap";
import Head from "next/head";

export default function GoodGods() {
  const {data, loading, error} = useBadGodsPage();

  if(loading) return (
    <div align="center">
      <Spinner style={{height: "200px", width: "200px", marginTop: "200px"}} animation="border" />
    </div>
  )

  if(error){
    return <div>error</div>
  }


  return (
    <div>
      <Head>
        <title>Bad Gods</title>
      </Head>
      <BadGodsContent data={data} />
    </div>
  )
}
