import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const Actionpage=()=>{


    const [alltasks,setalltasks]=useState([])

   




    const fetchalltasks=async()=>{
        try{
          const res=await axios.get("http://localhost:8800/tasks")
          setalltasks(res.data)
        }
        catch(err){
          console.log(err)
        }
      } 


    useEffect(()=>{
        fetchalltasks()
      },[])


   

    const handledeleteclick=async(id)=>{
        try{
          const res=await axios.get("http://localhost:8800/deletetaskg/"+id)
        }
        catch(err){
          console.log(err)
        }
    }



    return(
        <div className="container">
            <h1>Task Manager {deletetask.taskid}</h1>
        <br></br>
        <div className="addtask">
            <div className="row">
                <div className="col-sm-2"><b>Task</b></div>
            </div>
            <div className="row">
                <div className="col-sm-2"><input type="text" autoComplete="off"/></div>
                <div ><input type="hidden" value="To be Done"/></div>
                <div className="col-sm-2"><button>Add Task</button></div>
            </div>
            </div>
        <hr></hr>

        <div className="tasks">
        <table className="table table-hover">
        <thead>
            <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Update</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>

        {alltasks.map((taskdata) =>(
                <tr key={taskdata.taskid}>
                <td>{taskdata.task}</td>
                <td>{taskdata.status}</td>
                <td><button>Update Task</button></td>
                <td><button onClick={()=>handledeleteclick(taskdata.taskid)}>Delete Task</button></td>
                </tr>
            ))}    
        </tbody>
        </table>
        </div>



        </div>

    )

}
export default Actionpage;