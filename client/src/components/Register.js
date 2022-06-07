import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag';

import { useForm} from '../util/hooks'

const Register = () => {
    const [errors, setErrors] = useState({});

const { onChange, onSubmit, values} = useForm(registerUser,{
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
   
})  

const [addUser, {loading}] = useMutation(REGISTER_USER, {
 update(_,results){
  console.log(results);
},
onError(err){
    setErrors(err.graphQLErrors[0].extensions.exception.errors)
},
 variables:values
})

function registerUser(){
  addUser()
}
  return (
    <div className='form-container'>
        <Form onSubmit={onSubmit} noValidate className={loading? 'loading':''}>
            <Form.Group>
            <Form.Label>UserName</Form.Label>
            <Form.Control
             label='Username'
             placeholder="Username"
             type='text'
             name="username"
             value={values.username}
             onChange={onChange}
             errors={ errors.username ? true : false}
            />
            </Form.Group>
           
            <Form.Group>
            <Form.Label>UserName</Form.Label>
            <Form.Control
             label='Email'
             placeholder="Email"
             type='email'
             name="email"
             value={values.email}
             onChange={onChange}
             errors={ errors.email ? true : false}
            />
            </Form.Group>
           
            <Form.Group>
            <Form.Label>UserName</Form.Label>
            <Form.Control
           label='Password'
           placeholder="Password"
           type='password'
           name="password"
           value={values.password}
           onChange={onChange}
           errors={ errors.password ? true : false}
            />
            </Form.Group>

            <Form.Group>
            <Form.Label>UserName</Form.Label>
            <Form.Control
          label='ConfirmPassword'
          placeholder="ConfirmPassword"
          type='password'
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={onChange}
          errors={ errors.username ? true : false}
            />
            </Form.Group>
             
          
        <Button type='submit' primary>Register</Button> 
        </Form>
        { Object.keys(errors).length > 0 && (
         <div className='ui error message'>
             <ul className='list'>
                 {Object.values(errors).map((value) =>(
                 <li key={value}>{value}</li>
                 ))
                 
                 }

             </ul>

         </div>
        )
        
        }
    </div>
  )
}

const REGISTER_USER = gql`
 mutation register(
   $username:String!
   $email:String!
   $password:String!
   $confirmPassword:String!
 ){
    register(
       registerInput:{
         username:$username
         email:$email
         password:$password
         confirmPassword:$confirmPassword
       }
    ){
      id email username createdAt token
     }
   
   }
`

export default Register