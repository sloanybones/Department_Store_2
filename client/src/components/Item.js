import React, { useState } from 'react';
import { Card, Button, Grid} from 'semantic-ui-react';
import ItemForm from './ItemForm';
import { Header } from './styles/Headers';
import styled from 'styled-components'

const Item = ({ item, deleteItem, updateItem, department }) => {

  const [showForm, setShowForm] = useState(false);

  return (
      <>
      <Grid.Column>
      <StyledCard>
          <Header>
            <Card.Header style={{textAlign: "center"}}>{item.name}</Card.Header>
          </Header>
            <Card.Description style={{textAlign: "center"}}>
            {item.description}
            </Card.Description>
            <br ></br>
            <Card.Meta style={{textAlign: "center", paddingBottom: "5%"}}>${item.price}</Card.Meta>
            <span style={{textAlign: "center"}}>
            <Button icon='trash' color='red' onClick = {() => deleteItem(item.id)}/>
            <Button icon='pencil' color='blue' onClick = {() => setShowForm(!showForm)}/>
            </span>
        </StyledCard>

      </Grid.Column>
        {showForm && <ItemForm item={item} updateItem={updateItem} department={department} hideEditForm={()=>setShowForm(false)}/>}
      </>
  )
}
export default Item;

const StyledCard = styled(Card)`
    // height: 250px !important;
    margin: 5% 0 !important;
`;