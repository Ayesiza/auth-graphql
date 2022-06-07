import React, {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag';

import { useForm} from '../util/hooks'

const Login = () => {
    const [errors, setErrors] = useState({});

const { onChange, onSubmit, values} = useForm(loginUserCallback,{
    username:'',
    password:'',
    
   
})  



const [loginUser, {loading}] = useMutation(LOGIN_USER, {
 update(_,results){
  console.log(results);
},
onError(err){
    setErrors(err.graphQLErrors[0].extensions.exception.errors)
},
 variables:values
})

function loginUserCallback(){
  loginUser()
}
  return (
    <div className='form-container'>
        <Form onSubmit={onSubmit} noValidate className={loading? 'loading':''}>
           <h1>Login Here</h1>
            <Form.Input
             label='Username'
             placeholder="Username"
             type='text'
             name="username"
             value={values.username}
             onChange={onChange}
             errors={ errors.username ? true : false}
            />
            
             <Form.Input
            label='Password'
            placeholder="Password"
            type='password'
            name="password"
            value={values.password}
            onChange={onChange}
            errors={ errors.password ? true : false}
           /> 
           
        <Button type='submit' primary>Login</Button> 
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