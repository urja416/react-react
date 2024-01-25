import React from 'react'

const Learn2 = () => {

  const numbers = [11, 13, 15, 19];

  const n2 = numbers.map((a, b) => {
    // return a * 2;
    return b.toString();
  });
  console.log(n2);

  // const persons = ['ram', 'shyam', 'hari', 'sita'];

  // const datas = ['1nio', '2jio', '3sio'];

  // const temperature = 20;
  // const value = 2;
  // const pizza = 'pizza';
  // const pasta = 'pasta';


  return (
    <div className='p-2'>

      {/* <h1 className='font-bold text-2xl'>Users</h1> */}
      <div>
        {/* {persons.map((per, i) => {
          return <h1 key={i}>{per}</h1>
        })} */}
        {/* {datas.map((data, i) => {
          return <h1 key={i}>{`${data.substring(0, 1)} ${data.substring(1, data.length).toUpperCase()}`}</h1>
        })}
        {`temp is ${temperature},  two plus two is ${value + 2}, i like ${pizza.toUpperCase()} AND ${pasta.toUpperCase()} `} */}
      </div>





    </div>
  )
}




export default Learn2
