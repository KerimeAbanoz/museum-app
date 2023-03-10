import { useEffect, useState } from "react";
import axios from "axios";

const useGetWorks = (query, pageNumber) => {
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://collectionapi.metmuseum.org/public/collection/v1/objects",
      params: { q: query, page: pageNumber },
    }).then((res) => {
      // console.log(res.data);
    });
  }, [query, pageNumber]);
  return null;
};

export default useGetWorks;
