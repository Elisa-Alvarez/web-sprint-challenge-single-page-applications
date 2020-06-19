import React from 'react'
import {Link} from 'react-router-dom'


function Pizza (props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        popUpError,
      } = props

    return(
        <div className="pizza-container">
            <header className="pizza-header">
            <h1>Build Your Own Pizza</h1>
            <div className='pizza-hero-img'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThawq0vKzMqJPPV_kklD6ADVXUK_GOz0ORur-emOyGh3Tv9L_I&usqp=CAU" alt='pizza' />
            </div>
            </header>
    
            <div className='popUpError'>
          
          <div>{popUpError.first_name}</div>
          <div>{popUpError.email}</div>
          
        
        </div>
        
        <form  onSubmit={onSubmit}>
      <div >
        <h2> Choose your Pizza</h2>

        
        <h4>User Information</h4>

        
        <div className='popUpError'>
          
          <div>{popUpError.first_name}</div>
          <div>{popUpError.email}</div>
         
        
        </div>
        
      

 
        <label>First Name&nbsp;
          <input
            value={values.first_name}
            onChange={onInputChange}
            name='first_name'
            type='text'
          />
        </label>
        <label>Last Name&nbsp;
          <input
            value={values.last_name}
            onChange={onInputChange}
            name='last_name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>

        <div className='topping-checkboxes'>
        <h4>Toppings</h4>

        
        <label>Peperoni
          <input
            name='pepperoni'
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.pepperoni}
          />
        </label>

        <label>Sasage
          <input
            name='sasage'
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.sasage}
          />
        </label>

        <label>Pineapple
          <input
            name='pineapple'
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.pineapple}
          />
        </label>
        <label>Bacon
          <input
            name='bacon'
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.bacon}
          />
        </label>
      </div>

     

      <label> Special Instructions
      <input
        name='text'
        type='text'
        value={values.text}
        onChange={onInputChange}
        placeholder='Enter Special Intructions'
      />
    </label>
      <div className='Terms'>
        <h4>Terms</h4>

       
        <label> Terms of Service
          <input
            name='Terms'
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.Terms.Terms}
          />
        </label>
        <Link to='/confirm'>
        <button disabled={disabled}>submit</button>
        </Link>
      
        </div>
        </div>
    </form>





        </div>
    )

}

export default Pizza