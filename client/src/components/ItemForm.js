import Axios from 'axios';
import {useState} from 'react';
import { Form } from 'semantic-ui-react';

export default ({ addItem, updateItem, item, hideEditForm, department }) =>{
    const [name, setName] = useState(item ? item.name : '');
    const [description, setDescription] = useState(item ? item.description: '');
    const [price, setPrice] = useState(item ? item.price: '');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(item){
            Axios.put(
              `/api/departments/${department}/items/${item.id}`, {name: name, price: price, description: description }
            ).then((res) => updateItem(res.data));
            hideEditForm();
        }
        else{
          Axios.post(`/api/departments/${department}/items`,{name: name, description: description, price: price})
        .then((res) => addItem(res.data));
        }
        
        setName('')
        setDescription('')
        setPrice('');
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Input 
            label={'Name'}
            value={name}
            onChange={(e)=> {
                setName(e.target.value);
            }}
            />
            <Form.Input 
            label={'Description'}
            value={description}
            onChange={(e)=> {
                setDescription(e.target.value);
            }}
            />
            <Form.Input 
            label={'Price'}
            value={price}
            onChange={(e)=> {
                setPrice(e.target.value);
            }}
            />
            <Form.Button type="submit" color="green">{item ? "edit" : "add"}</Form.Button>
        </Form>
    )
        }

        {/* 
          
            Axios.post(`/api/departments/${id}/items`,{name: name})
        .then((res) => addItem(res.data));

        */}