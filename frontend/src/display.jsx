import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Display = () => {
  const [data, setData] = useState([]);



const loadData=()=>{
    const api="http://localhost:8080/users/displaydata";
    axios.get(api).then((res)=>{
        setData(res.data)
        console.log(res.data)
    })
}
  
useEffect(()=>{
    loadData()
},[])

  const ans =  data.map((key)=>
  {
    return(<>
         <tr>
          <td>{key.firstName}</td>
          <td>{key.lastName}</td>
          <td>{key.user.userName}</td>
          <td>{key.user.Email}</td>
         </tr>
    </>)
  }
  )

  return (
    <div>
      <h1>User Profiles</h1>
      <Table bordered hover cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </Table>
    </div>
  );
};

export default Display;



