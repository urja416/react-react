import React from 'react'
import Learn1 from './Learn1';
import Ternary from './Ternary';
import Learn2 from './Learn2';
import Array1 from './Array1';
import Object2 from './Object2';
import { person } from './dummy/meals';
import { product } from './dummy/product';
import Header from './components/Header';
import DisplaySection from './pages/homepage/DisplaySection';
import Technology from './pages/homepage/Technology';
import Intro from './pages/homepage/Intro';
import Footer from './components/Footer';



const App = () => {

  // const persons = ['ram', 'shyam', 'hari'];
  // persons.push('lio');
  // const a = persons[0];
  // const b = persons[1];
  // console.log(a, b);
  // console.log(persons.includes('sita'));

  // const [c, d] = persons;


  // const numbers = [11, 22, 33, 44, 55, 99, 88, 23, 45, 67, 30, 40];
  // let odd = 0;
  // let even = 0;

  // numbers.forEach((ni) => {
  //   // somes = somes + ni;
  //   if (ni % 2 === 0) {
  //     even += ni;
  //   } else {
  //     odd += ni;
  //   }
  // });

  // console.log(odd);
  // console.log(`even total ${even}`);

  // const person = {
  //   name: 'ram',
  //   age: 30,
  //   address: 'kathmandu',
  //   phonenumber: 9812345676
  // };
  // const car = {
  //   name: 'Audi',
  //   color: ['black', 'red', 'bule'],
  //   Fueltype: 'petrol',


  // };


  // let total = 90;

  // const greet = () => {
  //   total = total + 100;
  //   console.log('Hello jee')
  // }
  // greet();
  // console.log(total);

  // const fname = 'Ram';
  // const lname = 'lakhan';

  // const fullNamefunc = () => {
  //   return `fullname is ${fname} ${lname}`;

  // }
  // const some = fullNamefunc();
  // console.log(some);

  // const alertUser = (msg) => {
  //   alert(`hey hold on ${msg}`);
  // }





  return (
    <div>


      <Header />
      <DisplaySection />
      <Technology />
      <Intro />
      <Footer />


      {/* <Learn1 />
      <Ternary />
      <Learn2 />
      <Array1 />
      <Object2 /> */}


    </div>
  )




}

export default App
