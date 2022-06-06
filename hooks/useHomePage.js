import { useQuery, gql } from "@apollo/client";

const GET_HOMEPAGE = gql`
    {
        home {
            data {
                attributes {
                Slug
                HeroTitle
                HeroVideo {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                Period1
                Description1
                DescriptionImage1 {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                Period2
                Description2
                DescriptionImage2 {
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

export const useHomePage = () => {
    const {error, data, loading} = useQuery(GET_HOMEPAGE);
   
    return{
        error,
        data,
        loading
    }
}