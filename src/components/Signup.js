import React, {useRef,useState} from 'react';  
import {Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup, currentUser}=useAuth()
    const [error, setError]=useState('')
    const [loading, setLoading]=useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Incorrect Password')
        }
        try{
            setError('')
            setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        }catch{
            setError('Failed to create account')
        }
        setLoading(false)

    }
  return (
      <React.Fragment>
   <Card>
           <h2 className="text-center mb-4" >Sign up</h2>
           {error && <Alert variant="danger"> {error}</Alert>}
           <Form onSubmit={handleSubmit}>
               <Form.Group id="email">
                   <Form.Label>Email</Form.Label> 
                   <Form.Control type="email" ref={emailRef} required />

               </Form.Group>
                <Form.Group id="password">
                   <Form.Label>password</Form.Label> 
                   <Form.Control type="password" ref={passwordRef} required />

               </Form.Group>
               <Form.Group id="password-confirm">
                   <Form.Label>password confirmation</Form.Label> 
                   <Form.Control type="password" ref={passwordConfirmRef} required />

               </Form.Group>
               <Button disabled="loading" type="submit" className="w-50" >
                   Sign Up
               </Button> 
           </Form>
           <div className="w-50 text-center mt-2">Already have an account? Login </div>

     
   </Card>
   </React.Fragment>

  )

}
