import { useQuery, gql } from "@apollo/client";

const GET_ARTIFACTSPAGE = gql`
query {
    artifactsPage {
      data {
        attributes {
          Title
        }
      }
    }
    
    artifacts {
      data {
        attributes {
          ArtifactName
          ArtifactDescription
          ArtifactImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const useArtifactsPage = () => {
    const {error, data, loading} = useQuery(GET_ARTIFACTSPAGE);
   
    return{
        error,
        data,
        loading
    }
}