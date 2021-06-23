import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import {TcountryISO} from "../Config/TypeScript/Types";

export const client = new ApolloClient({
    uri: 'https://graphql-weather-api.herokuapp.com/',
    cache: new InMemoryCache()
});


export const getCityByName = (name: string, country?: TcountryISO) => {
    let countryReq = "";
    if (country !== undefined) {
        countryReq = `, country: "${country}"`
    }
    return gql`{
        getCityByName(name:"${name}" ${countryReq}, config:{units:metric}) {
        country
        weather {
            temperature {
                actual
                feelsLike
                min
                max
            }
            summary {
                title
                description
            }
            wind {
                speed
                deg
            }
            clouds {
                all
                visibility
                humidity
            }
        }
    }
    }`
}


