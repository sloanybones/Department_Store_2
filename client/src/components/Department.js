import { useState } from "react";
import { Header, Button, List } from "semantic-ui-react";
import DepartmentForm from "./DepartmentForm";
import { Link } from 'react-router-dom';



const Department = ({department, deleteDepartment, updateDepartment}) =>{

    const [showEditForm, setShowEditForm] = useState(false);

    return(
        <>
        <List divided relaxed>
            <Link to={`/departments/${department.id}`} key={department.id}>{department.name}</Link>
            <Button size="mini" icon="x" color="red" onClick={()=>deleteDepartment(department.id)}/>
            <Button size="mini" icon="pencil" onClick={()=>setShowEditForm(!showEditForm)} />
            {showEditForm && <DepartmentForm department={department} updateDepartment={updateDepartment} hideEditForm={()=>setShowEditForm(false)}/>}
        </List>
        </>
    );
}
export default Department;