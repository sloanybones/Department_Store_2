import {useState} from 'react';
import { Form } from 'semantic-ui-react';

export default (props) =>{
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        props.addDepartment({name});
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