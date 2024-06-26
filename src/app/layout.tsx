"use client"
import { ApolloProvider, gql, useQuery } from '@apollo/client';
import client from '../apollo-client';
import { useEffect } from 'react';


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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const { data, error, loading } = useQuery(PRICES_ONE_WAY, {variables: {
  //   origin: "MAS",
  //   destination: "LON",
  //   departMonths: "2022-07-01",
  //   noLowcost: true,
  //   limit: 3,
  //   offset: 0,
  //   sorting: "VALUE_ASC",
  // },})
  // console.log(data);

  useEffect(() => {
    // client
    // .query({
    //   query: gql`
    //     query GetLocations {
    //       locations {
    //         id
    //         name
    //         description
    //         photo
    //       }
    //     }
    //   `,
    // })
    // .then((result) => console.log(result)); 


    client
    .query({
      query: gql`
        {
          prices_one_way(
            params: {
                origin: "BCN"
                destination: "LON"
                depart_months: "2022-07-01"
                no_lowcost: true
                }
            paging: {
                limit: 3
                offset: 0
              }
            sorting: VALUE_ASC
          )
        {
          departure_at
          value
          trip_duration
          ticket_link
        }
        }
      `,
    })
    .then((result) => console.log(result)); 
  }, [])

  

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
