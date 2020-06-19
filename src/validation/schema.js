import * as Yup from "yup";

const formSchema = Yup.object().shape({
   

  first_name: Yup
  .string()
  .min(3, "First name must be at least 3 characters long.")
  .required("Password is Required"),

  last_name: Yup
  .string()
  .min(3, "Last name must be at least 3 characters long.")
  .required("Password is Required"),

email: Yup
  .string()
  .email("Must be a valid email address.")
  .required("Must include email address."),
Toppings: Yup
  .boolean()
  .oneOf([true], "Please select a topping"),

  text:Yup
  .string()
  .min(0)
  .required("Please State N/a if no instructions are needed"),
  
  
Terms: Yup
.boolean()
.oneOf([true],"Please accept Terms"),

})

export default formSchema