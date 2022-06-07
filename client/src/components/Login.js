import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag';

import { useForm} from '../util/hooks'

const Login = () => {

const { onChange, onSubmit, values} = useForm(loginUserCallback,{
    username:'',
    password:'',
    
   
})  


const [loginUser, {loading}] = useMutation(LOGIN_USER, {
 update(_,results){
  console.log(results);
},

 variables:values
})

function loginUserCallback(){
  loginUser()
}
  return (
    <div className='login-form'>
    <Form  onSubmit={onSubmit} noValidate className={loading? 'loading':''} >
      <h1>Login Here</h1>
    <Form.Group className="mb-3" controlId="formBasicUsername">
      <Form.Label>UserName</Form.Label>
      <Form.Control label='Username'
             placeholder="Username"
             type='text'
             name="username"
             value={values.username}
             onChange={onChange}
            
              />
     
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control  label='Password'
            placeholder="Password"
            type='password'
            name="password"
            value={values.password}
            onChange={onChange}
           
            />
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Login
    </Button>
  </Form>
 
    </div>
  )
}

const LOGIN_USER = gql`
 mutation login(
   $username:String!
   $password:String!
 ){
    login(
      
         username: $username password: $password
    ){
      id email username createdAt token
     }
   
   }
`

export default Login