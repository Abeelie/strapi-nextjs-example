import { gql, useQuery } from "@apollo/client";

const GET_GOODGODSPAGE = gql`
query {
    goodGodsPage {
      data {
        attributes {
          Title
        }
      }
    }
    
    goodGodDescriptions {
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



export const useGoodGodsPage = () => {
    const {error, data, loading} = useQuery(GET_GOODGODSPAGE);

    return{
        error,
        data,
        loading
    }
}