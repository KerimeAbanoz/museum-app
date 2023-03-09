import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ArtDetail = () => {
  const API =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects";

  const [ArtDetail, setArtDetail] = useState("");
  const { id } = useParams();

  const { title } = ArtDetail;

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setArtDetail(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container px-10 mx-auto py-5">
      <div className="container flex justify-center px-10">
        <div className="flex flex-col lg:flex-row max-w-6xl rounded-lg bg-gray-100 shadow-lg">
          <img
            className=" lg:w-1/3 h-96 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            // src={poster_path ? baseImageUrl + poster_path : defaultImage}
            alt="poster"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Overview
              </h5>
              <p className="text-gray-700 text-base mb-4">{}</p>
            </div>
            <ul className="bg-gray-100 rounded-lg border border-gray-400 text-gray-900">
              <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg">
                {"Release Date : "}
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full">
                {"Rate : "}
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full">
                {"Total Vote :"}
              </li>
              <li className="px-6 py-2 border-gray-400 w-full rounded-t-lg">
                <Link
                  to={-1}
                  className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                >
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDetail;
