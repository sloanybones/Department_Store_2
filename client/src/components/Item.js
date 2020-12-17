import Axios from 'axios';
import React, { useState } from 'react';
import { List, Container, Card, Button } from 'semantic-ui-react';
import ItemForm from './ItemForm';

const Item = ({ item, deleteItem, updateItem, department }) => {

  const [showForm, setShowForm] = useState(false);

  return (
      <>
      
        <Card>
            {item.name}
            <br ></br>
            {item.description}
            <br ></br>
            ${item.price}
            <span><Button icon='trash' color='red' onClick = {() => deleteItem(item.id)}></Button>
            <Button icon='pencil' color='blue' onClick = {() => setShowForm(!showForm)}></Button></span>
        </Card>
        {showForm && <ItemForm updateItem={updateItem} department={department}/>}
      </>
  )
}

export default Item;