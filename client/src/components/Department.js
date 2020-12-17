import { useState } from "react";
import { Header, Button } from "semantic-ui-react";
import DepartmentForm from "./DepartmentForm";


const Department = ({department, deleteDepartment, updateDepartment}) =>{

    const [showEditForm, setShowEditForm] = useState(false);

    return(
        <>
            <Header key={department.id}>{department.name}</Header> 
            <Button size="mini" icon="x" color="red" onClick={()=>deleteDepartment(department.id)}/>
            <Button size="mini" icon="pencil" onClick={()=>setShowEditForm(!showEditForm)} />
            {showEditForm && <DepartmentForm department={department} updateDepartment={updateDepartment} hideEditForm={()=>setShowEditForm(false)}/>}
        </>
    );
}
export default Department;