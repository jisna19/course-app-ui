import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Search = () => {
    const [data,changedata]=useState(
        {
            "title":""
           } 
    )
    const [result,changeresult]=useState([])
    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value })
    }

    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                console.log(response.data )
                changeresult(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
  return (
    <div>
    <NavBar/>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">title</label>
                        <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>search</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">date</th>
      <th scope="col">duration</th>
      <th scope="col">Trainer name</th>
    </tr>
  </thead>
  <tbody>
    {
        result.map(
            (value,index)=>{
                return  <tr>
                <td>{value.title}</td>
                <td>{value.description}</td>
                <td>{value.date}</td>
                <td>{value.duration}</td>
                <td>{value.trainerName}</td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>

              </tr>
            }
        )
    }
   
  </tbody>
</table>
        </div>
    </div>
    </div>
  )
}

export default Search