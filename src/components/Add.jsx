import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Add = () => {
    const [data,changedata]=useState([
        {
            "title":"",
            "description":"",
            "date":"",
            "duration":"",
            "venue":"",
            "trainerName":""
           } 
    ])
    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value })
    }

    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
        if (response.data.status=="success") {
            alert("success")
            
        } else {
            alert("Error")
            
        }
    }).catch().finally()
    
}
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">description</label>
                            <input type="text" className="form-control" name='description' value={data.description} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">date</label>
                            <input type="date" name="date" id="" className="form-conrol" value={data.date} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">duration</label>
                            <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">venue</label>
                            <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">trainerName</label>
                            <input type="text" className="form-control" name='trainerName' value={data.trainerName} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <button className="btn btn-success" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add