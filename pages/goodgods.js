import GoodGodsContent from "../componets/godscontent/GoodGodsContent";
import { useGoodGodsPage } from "../hooks/useGoodGodsPage";
import { Spinner } from "react-bootstrap";

export default function GoodGods() {
  const {data, loading, error} = useGoodGodsPage();

  if(loading) return (
    <div align="center">
      <Spinner style={{height: "200px", width: "200px", marginTop: "200px"}} animation="border" />
    </div>
  )

  if(error){
    return <div>error</div>
  }


  return (
    <div className={""}>
      <GoodGodsContent data={data} />
    </div>
  )
}
