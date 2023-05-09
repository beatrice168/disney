import React from 'react'
import leo from '../image/leo.jpg'
function Home() {
  return (
    <div className='bit'>
    <h1><strong>Welcome to Bitu's animation site</strong></h1>
   <img src={leo} alt='leoo' className='leo'/>
    </div>
  )
}
export default Home;