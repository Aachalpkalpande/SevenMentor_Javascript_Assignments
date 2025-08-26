import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Product() {
    const[users,setUsers]=useState( []);

    useEffect(()=>{
        axios.get(
            "https://jsonplaceholder.typicode.com/users"

        ).then(
            (response)=>setUsers(response.data)
        ).catch(
            (error)=>console.log("Fetching error" +error)
        );
    },[])
  

    /*
    <div>
      <h3>User details</h3>
      <div className="row">
     
      {
        users.map((p) =>(
            <div className="col-mid-4">

            <div class="card">
             <div class="card-body">
            <h5 class="card-title">{p.id} </h5>
             <p class="card-text">{p.title} </p>
             <p class="card-text">{p.email}</p>
       

    </div>
    </div>
     </div>
        
    ))  }
      </div>
    </div>

)}
*/





return (
<>
  <h3> user details</h3>
    
    {
        users.map((p) =>(

<table class="table table">
  <thead>
    <tr>
      <th scope="col">user Id</th>
      <th scope="col">Name</th>
      <th scope="col">Title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{p.userid}</th>
      <td>{p.name}</td>
      <td>{p.title}</td>
      <td>{p.body}</td>
    </tr>
  </tbody>
</table>

   ) )}
</>
)}
