import Axios from 'axios';
import {useState} from 'react';
import { Form } from 'semantic-ui-react';

export default ({addDepartment, updateDepartment, department, hideEditForm}) =>{
    const [name, setName] = useState(department ? department.name : '');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(department){
            updateDepartment(department.id, name)
            hideEditForm();
        }
        else{
            Axios.post(`/api/departments`,{name: name})
        .then((res) => addDepartment(res.data));
        }
        
        setName('');
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Input 
            label={'Department'}
            value={name}
            onChange={(e)=> {
                setName(e.target.value);
            }}
            />
            <Form.Button type="submit" color="green">add</Form.Button>
        </Form>
    )
        }