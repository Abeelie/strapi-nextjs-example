import { gql, useQuery } from "@apollo/client";


const GET_BADGODSPAGE = gql`
query {
    badGodsPage {
      data {
        attributes {
          Title
        }
      }
    }
    
    badGodDescriptions {
      data {
        attributes {
          Name
          Description
          Image {
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



export const useBadGodsPage = () => {
    const {error, data, loading} = useQuery(GET_BADGODSPAGE);

    return{
        error,
        data,
        loading
    }
}