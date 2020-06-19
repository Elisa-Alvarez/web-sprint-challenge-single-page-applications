import React, {useState,useEffect} from "react"
import {Route,Switch,Link} from 'react-router-dom'
import Home from './components/Home'
import Pizza from './components/Pizza'
import Confirm from './components/confirm'
import formSchema from './validation/schema'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import * as Yup from 'yup'


const pizzaFormValue = {
  id: uuid(),
  first_name: '',
  last_name:'',
  email: '',
  Toppings:{
    pepperoni: false,
    sasage: false,
    pineapple: false,
    bacon:false
},
  Terms: {                   
    Terms: false
  },
}

const errors = {
  
  first_name: '',
  email: '',
  password:'',
  
  
}

const App = () => {
  const [orderConfirm, setOrder] = useState([]);
  const [pizzaForm, setPizzaForm] = useState(pizzaFormValue);
  const [pizzaFormError, setOrderError] = useState(errors) 
  const [disable, setDisabled] = useState(true) 


    
  const getOrder = () => {
    axios.get('http://localhost:3000/pizza')
    .then(response => {
      
      setOrder(response.data)
    
    })
    .catch(err => {
      debugger
    })
}

const postNewOrder= newOrder =>{
  axios.post('https://http://localhost:3000/confirm', newOrder)
  .then(res => {
    setOrder([...orderConfirm, res.data])
    
  })
  .catch(err => {
    debugger
  })
  .finally(() => {
    setPizzaForm(pizzaFormValue)
  })
  
}

  const onInputChange = evt => {
   
   
    const { name, value } = evt.target
    
  
    Yup
      .reach(formSchema, name)
   
      .validate(value)
      
      .then(() => {
        setOrderError({
          ...pizzaFormError,
          [name]: ''
        })
      })
      
      .catch(err => {
        setOrderError({
          ...pizzaFormError,
          [name]: err.errors[0] 
        })
      })

    setPizzaForm({
      ...pizzaForm,
      [name]: value 
    })
  }

  
  const onCheckboxChange = evt => {
   
    const { name, checked } = evt.target

      setPizzaForm({
        ...pizzaForm, 
        [name]:checked,
        [name]:checked,
      })
      
    
  }
  const onSubmit = evt => {
    evt.preventDefault()
    
    const newOrder = {
      id: uuid(),
      first_name: pizzaForm.first_name.trim(),
      last_name: pizzaForm.last_name.trim(),
      email: pizzaForm.email.trim(),
       
    }
     postNewOrder(newOrder)
   
  }
 
  
  useEffect(() => {
    getOrder()
    
  }, [])

  
 
  useEffect(() => {
    formSchema.isValid(pizzaForm)
    .then(valid => {
      setDisabled(!valid);
    })
  }, [pizzaForm])
  return (
 <div>
      
      <div className='mainHeader'>
          <h1>Lambda Eats</h1>
          <nav>
              <ul>
                  <Link to="/">
                  <li>Home</li>
                  </Link>
                  <li>Help</li>
              </ul>
          </nav>
        </div>

    <Switch>
      <Route exact path="/">

          <Home/>

      </Route>
      <Route path= "/pizza">
          <Pizza  values={pizzaForm}
              onInputChange={onInputChange}
              onCheckboxChange={onCheckboxChange}
              onSubmit={onSubmit}
              disabled={disable}
              popUpError={errors} />
      </Route>
      <Route path="/confirm">
      <Confirm  />
      </Route>
    </Switch>
    </div>
  );
};
export default App;
