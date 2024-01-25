import React from 'react'

const Array1 = () => {
  const numbers = [11, 22, 44, 55, 66];
  // find returns only one value
  const findGreat40 = numbers.find((n) => {
    return n > 40;
  });
  console.log(findGreat40);

  // filter returns multipe value 
  const findGreat20 = numbers.filter((n) => {
    return n > 20;
  });
  console.log(findGreat20);

  // reduce
  const ni = numbers.reduce((a, b) => {
    return a + b;
  })
  console.log(ni);

  const rating = [5, 4, 3, 2, 1, 4, 5, 5, 3];
  const f = rating.length;
  const rate = rating.reduce((c, d) => {
    return c + d;
  })
  const avg = rate;
  console.log(avg);

  const oddNumber = (numbers) => {
    const findoddNumber = numbers.filter((n) => {
      return n % 2 !== 0;
    });
    console.log(findoddNumber);

  }

  const mios = oddNumber([11, 22, 44, 55, 66, 77]);


  // const userInput = prompt('whats your age ?');

  const sure = window.confirm ('Are you sure to exit ?')
  


 

  // console.log(userInput);


  return (
    <div>
      {/* {numbers.map((number, i) => {
        return <h1 key={i}>{number}</h1>
      })} */}



    </div>
  )
}

export default Array1
