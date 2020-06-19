import React from 'react'
import {Link} from  'react-router-dom'


function Home (){

return(
<div className='container'>

 
<div className="hero-img">
<p>Your favorite food, delivered while coding</p>
<Link to= '/pizza'>
  <button className='pizza-btn'>Want Pizza?</button>
</Link>
</div>

<div className="food-delivery">
  <span><p>Food Delivery in Lambda City</p></span>
</div>
</div>
)
}

export default Home