import GoodGodsContent from "../componets/godscontent/GoodGodsContent";
import { useGoodGodsPage } from "../hooks/useGoodGodsPage";
import { Spinner } from "react-bootstrap";
import styles from "../styles/home.module.css";

export default function GoodGods() {
  const {data, loading, error} = useGoodGodsPage();

  if(loading){
    return <div align="center"><Spinner className={styles.spinner} animation="border" /></div>
  }

  if(error){
    return <div>error</div>
  }


  return (
    <div className={""}>
      <GoodGodsContent data={data} />
    </div>
  )
}
