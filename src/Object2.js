import React from 'react'

const Object2 = () => {
  const person = {
    name: 'ram',
    age: 50

  };

  const movie = {
    title: 'Avatar',
    releasedDate: 2023,
    imageUrl: 'as;dklasd;kld',
    rating: 9,
    cast: ['ram', 'shyam']
  };


  const movie1 = {
    title: 'Perfume',
    releasedDate: 1990,
    imageUrl: 'as;dklasd;kld',
    rating: 9,
    cast: ['rita', 'gita'],
    author: {
      name: 'lio',
      habits: ['dance', 'sing']
    }
  };



  const colors = ['red', 'green', 'black'];

  const persons = [
    { id: 1, genre: 'male', name: 'Rico', mail: 'rico@gmail.com' },
    { id: 1, genre: 'male', name: 'John', mail: 'john@gmail.com' },
    { id: 1, genre: 'female', name: 'Sandra', mail: 'sandra@gmail.com' },
    { id: 1, genre: 'male', name: 'Chan', mail: 'chan@gmail.com' },
  ];




  return (
    <div className='w-[200px] p-6'>

      {/* <img src="/images/clark.jpg" alt="" />
      <h1>{`movie title :- ${movie.title}`}</h1>

      <ul>
        {colors.map((c, i) => {
          return <li className='list-decimal' key={i}>{c}</li>
        })}
      </ul>

      {movie1.author.habits.map((habits, i) => {
        return <h1 key={i}>{habits}</h1>
      })} */}

      {/* {persons.id.map((per, id) => {
        return <h1 key={id}>{per}</h1>
      })} */}




    </div>
  )
}


export default Object2
