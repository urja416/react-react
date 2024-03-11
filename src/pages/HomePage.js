import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Detail from './Detail';




const HomePage = () => {
  const [movieData, setData] = useState(null);
  const [isLoad, setLoad] = useState(false);
  const [isErr, setErr] = useState(false);
  const [id, setId] = useState(null);

  const getMovie = async () => {
    try {
      const response = await axios.get('http://www.omdbapi.com', {
        params: {
          'apikey': '45c8f021',
          's': 'movie'
        }
      });
      setData(response.data.Search);
    } catch (err) {

    }
  }

  useEffect(() => {
    getMovie();
  }, [])




  // axios.get('https://api.themoviedb.org/3/movie/popular',
  //   {
  //     params: {
  //       'api_key': 'f74a17a7b2652440861237b836c503b8',

  //     }
  //   }
  // ).then((res) => {
  //   console.log(res.data);

  // }).catch((err) => {

  // });
  // console.log('render');





  return (
    <div className='grid grid-cols-2'>

      <div>
        {/* <button onClick={() => setData(data + 1)}>click me</button>
      <h1>{data}</h1> */}
        {movieData && movieData.map((movie) => {
          return <div key={movie.imdbID}>
            <h1>{movie.Title}</h1>
            <img onClick={() => setId(movie.imdbID)} className='cursor-pointer' src={movie.Poster} alt="" />
          </div>
        })}
      </div>

      <div>
        <Detail id={id} />
      </div>




    </div>
  )
}

export default HomePage
