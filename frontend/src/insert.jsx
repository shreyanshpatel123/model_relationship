import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import {  notification } from 'antd';

//import { use } from '../../backend/routers/userRoute';

const Insert=()=>{
    const [details,setDetails]=useState({});
 
      const handleInput=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setDetails((keys)=>({...keys , [name]:value}))
      }

      const handleSubmit=(e)=>{
        e.preventDefault()
        let Api="http://localhost:8080/users/datasave"
        axios.post(Api,details)      .then(response => {
            // Handle the response from the server
            console.log(response.data);
            notification.success({
                message: 'Success',
                description: 'Data submitted successfully!',
                placement: 'topLeft'
              }); 
      
          })
    
      }


    return(<>
       <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='firstName' value={details.firstName} onChange={handleInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name </Form.Label>
        <Form.Control type="text" name='lastName' value={details.lastName} onChange={handleInput}/>
      </Form.Group>      


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='Email' value={details.Email} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text"  name='userName' value={details.userName} onChange={handleInput}/>

      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>


    </>)
}

export default Insert

