// import { gql } from '@apollo/client';

// export const PRICES_ONE_WAY = gql`
//   query GetPricesOneWay(
//     $origin: String!, 
//     $destination: String!, 
//     $noLowcost: Boolean!, 
//     $limit: Int!, 
//     $offset: Int!, 
//     $sorting: String!
//   ) {
//     prices_one_way(
//       params: {
//         origin: $origin
//         destination: $destination
//         no_lowcost: $noLowcost
//       }
//       paging: {
//         limit: $limit
//         offset: $offset
//       }
//       sorting: $sorting
//     ) {
//       return_at
//       departure_at
//       value
//       trip_duration
//       ticket_link
//     }
//   }`
