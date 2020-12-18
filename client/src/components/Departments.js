import { useEffect, useState } from 'react';
import {Button, Container, Grid, Header} from 'semantic-ui-react';
import Axios from 'axios';
import DepartmentForm from './DepartmentForm';
import Department from './Department';
import { Title } from './styles/Headers';

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
    const updateDepartment = async (id, name)=>{
        try{
            let res = await Axios.put(`/api/departments/${id}`, {name: name});
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
        return departments.map((department)=>(
            <Grid.Column style={{padding: "1% 0"}}>
                <Department key={department.id} department={department} deleteDepartment={deleteDepartment} updateDepartment={updateDepartment}/>
            </Grid.Column>
            
        ));
    }

    

    return(
        <Container>
            <Title>Departments</Title>
            {showDepForm && <DepartmentForm addDepartment={addDepartment} style={{paddingBottom: "5%"}}/>}
            <Button onClick={()=> setShowDepForm(!showDepForm)}>{showDepForm ? "Cancel" : "Create Department"}</Button>
            <Grid columns={4}>
                <Grid.Row style={{padding: "7% 0"}}>
                {renderDepartments()}
                </Grid.Row>
            </Grid>
        </Container>
    )
}