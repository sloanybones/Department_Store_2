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


    useEffect(()=>{
        readDepartments();
    },[])

    //rendering the departments
    const renderDepartments = () =>{
        return departments.map((d)=>(
            <Header key={d.id}>{d.name}</Header>
        ));
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