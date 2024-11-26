

import { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";

function Banner(){
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // (async () => {
    //   try {
     
    //     const request = await axios.get(
    //       requests.fetchNetflixOriginals
    //     );
    //     console.log("API_Response:",request.data);
        
    //     setMovie(
    //       request.data.results[
    //         Math.floor(Math.random() * request.data.results.length)
    //       ]
    //     );
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // })();
      axios
        .get(requests.fetchNetflixOriginals)
        .then((res) => {
          console.log("API_Response:", res.data);

          setMovie(
            res.data.results[
              Math.floor(Math.random() * res.data.results.length)
            ]
          );
        })
        .catch((error) => {
          console.log("error", error);
        });
  }, []);

  const truncate=(str, n) =>
    str?.length > n ? str.slice(0,n) + "..." : str;
  

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${
          movie?.backdrop_path
        }')`,
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
