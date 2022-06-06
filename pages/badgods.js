import BadGodsContent from "../componets/godscontent/BadGodsContent";
import { useBadGodsPage } from "../hooks/useBadGodsPage";
import { Spinner } from "react-bootstrap";
import styles from "../styles/home.module.css";

export default function GoodGods() {
  const {data, loading, error} = useBadGodsPage();

  if(loading){
    return <div align="center"><Spinner className={styles.spinner} animation="border" /></div>
  }

  if(error){
    return <div>error</div>
  }


  return (
    <div className={""}>
      <BadGodsContent data={data} />
    </div>
  )
}
