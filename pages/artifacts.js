import React from "react";
import { Spinner } from "react-bootstrap";
import { useArtifactsPage } from "../hooks/useArtifactsPage";
import Artifacts from "../componets/artifacts/Artifacts";
import Head from "next/head";


export default function ArtifactsPage() {
    const {data, loading, error} = useArtifactsPage();

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
                <title>Artifacts</title>
            </Head>
            <Artifacts data={data} />
        </div>
    )
}



