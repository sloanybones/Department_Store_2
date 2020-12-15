import { useEffect, useState } from 'react';
import {Container, Header} from 'semantic-ui-react';
import Axios from 'axios';


let dummyDepartment = [{name: "test"}];

export default ()=>{

    const [departments, setDepartments] = useState([]);

    const readDepartments = async () =>{
        try{
            let res = await Axios.get('/api/departments');
            setDepartments(dummyDepartment);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        readDepartments();
    },[])

    const renderDepartments = () =>{
        return(
            departments.map((d)=>{
                return(
                    <Header key={d.id}>{d.name}</Header>
                ) 
            })
        )
    }

    return(
        <Container>
            <Header as="h1">Departments</Header>
            {renderDepartments()}
        </Container>
    )
}