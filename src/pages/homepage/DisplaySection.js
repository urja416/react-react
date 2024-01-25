import React from 'react'

const DisplaySection = () => {
  return (
    <div className='grid grid-cols-2 items-center px-5'>

      <div>
        <dotlottie-player src="https://lottie.host/f4472a42-d9a1-476a-8ed6-7e5642922114/GAwOnZHtCm.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>

      <div className="info space-y-3">
        <h1 className='text-2xl font-bold'>Hi, I Am John</h1>
        <h1 className='text-pink-600 italic'>Some Dev, Freelancer, Rounder</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>


      </div>


    </div >




  )
}

export default DisplaySection
