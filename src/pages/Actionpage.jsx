import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const Actionpage=()=>{


    const [alltasks,setalltasks]=useState([])


    const[addtask,setaddtask]=useState(
        {
            task:"",
            status:"ongoing"
        }
    )

   

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
          const res=await axios.get("http://localhost:8800/deletetask/"+id)
        //   window.location.reload()
        fetchalltasks()

        }
        catch(err){
          console.log(err)
        }
    }


    const handleaddchange=(e)=>{
        setaddtask(prev=>({...prev,[e.target.name]:e.target.value}))
    }


    const handleaddclick=async()=>{

        try{
            const resp=await axios.post("http://localhost:8800/addtask/",addtask)
            console.log(resp)
            alert("Task Added Successfully.")
            fetchalltasks()

            // window.location.reload()
        }
        catch(error){
            console.log(error)
            alert("API Not Working.")  
        }
        }



    return(
        <div className="container">
            <h1>Task Manager</h1>
        <br></br>
        <div className="addtask">
            <div className="row">
                <div className="col-sm-2"><b>Task</b></div>
            </div>
            <div className="row">
                <div className="col-sm-2"><input type="text" name="task" id="task" autoComplete="off" onChange={handleaddchange}/></div>
                {/* <div ><input type="hidden" value="To be Done"/></div> */}
                <div className="col-sm-2"><button onClick={handleaddclick}>Add Task</button></div>
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