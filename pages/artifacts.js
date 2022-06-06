import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/home.module.css";
import { useArtifactsPage } from "../hooks/useArtifactsPage";
import Artifacts from "../componets/artifacts/Artifacts";


export default function ArtifactsPage() {
    const {data, loading, error} = useArtifactsPage();

    if(loading){
        return <div align="center"><Spinner className={styles.spinner} animation="border" /></div>
    }
    
    if(error){
        return <div>error</div>
    }

    return (
        <div>
            <Artifacts data={data} />
        </div>
    )
}



