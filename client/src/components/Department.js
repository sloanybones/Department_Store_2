import { useState } from "react";
import {Button, Segment} from "semantic-ui-react";
import DepartmentForm from "./DepartmentForm";
import { Link } from 'react-router-dom';
import { Header} from "./styles/Headers";
import styled from "styled-components";



const Department = ({department, deleteDepartment, updateDepartment}) =>{

    const [showEditForm, setShowEditForm] = useState(false);

    return(
        <>
        <StyledSegment>
        <Header><Link to={`/departments/${department.id}`} key={department.id}>{department.name}</Link></Header>
            <br />
            <Button size="mini" color="red" onClick={()=>deleteDepartment(department.id)}>delete</Button>
            <Button size="mini" onClick={()=>setShowEditForm(!showEditForm)}>edit</Button>
            {showEditForm && <DepartmentForm department={department} updateDepartment={updateDepartment} hideEditForm={()=>setShowEditForm(false)}/>}
        </StyledSegment>
        </>
    );
}
export default Department;

const StyledSegment = styled(Segment)`
    min-height: 100px !important;
    margin: 1% !important;
`;