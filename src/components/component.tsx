// import { PRICES_ONE_WAY } from '@/queries';
// import { useQuery } from '@apollo/client';
  

// export default function List() {
//   const { loading, error, data } = useQuery(PRICES_ONE_WAY);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <ul>
//       {data.data.map((item, index) => (
//         <li key={index}>
//           {item.return_at}
//         </li>
//       ))}
//     </ul>
//   )
// }