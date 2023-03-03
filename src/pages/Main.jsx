// import React, { useEffect, useState } from "react";
// import axios from "axios";
// // import ArtCard from "../components/ArtCard";

// const API_KEY = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

// const Main = () => {

//     const [movies, setMovies] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [loading, setLoading] = useState(false);
  
//     useEffect(() => {
//       getMovies(API_KEY);
//     }, []);
  
//     const getMovies = (API) => {
//       setLoading(true);
//       axios
//         .get(API)
//         .then((res) => setMovies(res.data.results))
//         .catch((err) => console.log(err))
//         .finally(() => setLoading(false));
//     };
  


//   return (
//     <>
//       <form className="flex justify-center p-2">
//         <input
//           type="search"
//           className="w-80 h-8 rounded-md outline-none border p-1 m-2"
//           placeholder="Search a movie..."
//           onChange={(e) => setSearchTerm(e.target.value)}
//           value={searchTerm}
//         />
//         <button className="dark:text-white" type="submit">
//           Search
//         </button>
//       </form>
//       <div className="flex justify-center flex-wrap">
//         {/* {loading ? (
//           <div
//             className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
//             role="status"
//           >
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         ) : (
//           movies.map((movie) => <ArtCard key={movie.id} {...movie} />)
//         )} */}
//       </div>
//     </>
//   )
// }

// export default Main

import React from 'react'

const Main = () => {
  return (
    <div>Main</div>
  )
}

export default Main