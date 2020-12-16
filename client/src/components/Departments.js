import { useEffect, useState } from 'react';
import {Button, Container, Header} from 'semantic-ui-react';
import Axios from 'axios';
import DepartmentForm from './DepartmentForm';

//dummy data to test call
let dummyDepartment = [{name: "test"}];

export default ()=>{

    const [departments, setDepartments] = useState([]);
    const [showDepForm, setShowDepForm] = useState(false);

    //axios call to grab the departments
    const readDepartments = async () =>{
        try{
            let res = await Axios.get('/api/departments');
            setDepartments(res.data);
        }catch(err){
            console.log(err);
        }
    }

    //add a department
    const addDepartment = (department)=>{
       setDepartments([...departments, department]);
    }

    //update a department
    const updateDepartment = async (id, department)=>{
        try{
            let res = await Axios.put(`/api/departments/${id}`, department);
            let newDepartments = departments.map((d)=>
                d.id !== id ? d : res.data
            )
            setDepartments(newDepartments)
        }catch(err){
            console.log(err);
        }
    };

    //delete a department
    const deleteDepartment = async (id) =>{
        try{
            let res = await Axios.delete(`/api/departments/${id}`);
            let newDepartment = departments.filter((d)=> d.id !== res.data.id);
            setDepartments(newDepartment);
        }catch(err){
            console.log(err);
        }
    };

    useEffect(()=>{
        readDepartments();
    },[])

    //rendering the departments
    const renderDepartments = () =>{
        return departments.map((d)=>{
            return(
                <>
                <Header key={d.id}>{d.name}</Header> 
                <Button size="mini" icon="x" color="red" onClick={()=>deleteDepartment(d.id)}/>
                </>
            )
            
            });
    }

    return(
        <Container>
            <Header as="h1">Departments</Header>
            {showDepForm && <DepartmentForm addDepartment={addDepartment}/>}
            <Button onClick={()=> setShowDepForm(!showDepForm)}>{showDepForm ? "Cancel" : "Create Department"}</Button>
            {renderDepartments()}
        </Container>
    )
}