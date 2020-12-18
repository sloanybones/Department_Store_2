import Axios from 'axios';
import { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';
import Item from "./Item";
import ItemForm from './ItemForm';


const Items = ({match}) => {


  const [items, setItems] = useState([]);
  

  const readItems = async () => {
   
    try {
            let res = await Axios.get(`/api/departments/${match.params.id}/items`);  {/* ok, I also have one more idea we could try. at bottom of page */}
            // console.log(match.params);
            setItems(res.data); 
            
        } catch (err) {
            console.log(err);
      }
  };

   useEffect(()=>{
    readItems();
},[])


  const addItem = async (item) => {
    setItems([...items, item]);
  };

  const deleteItem = async (id) =>{
    try{
        let res = await Axios.delete(`/api/departments/${match.params.id}/items/${id}`);
        let newItem = items.filter((item)=> item.id !== res.data.id);
        setItems(newItem);
    }catch(err){
        console.log(err);
    }
};

const updateItem = (item) => {
  let newItems = items.map((i)=>
                i.id !== item.id ? i : item
            )
            setItems(newItems);
};
  

  const renderItems = (props) => {
    return items.map((item) => (
        <Item key={item.id} item={item} deleteItem={deleteItem} updateItem={updateItem} department={match.params.id} />
      )
    );

  };

return (        
  <>
  <Container>
    <h1>Here are our items</h1>
    {/* <Button onClick = {() => addItem()}>Add an item</Button> */}
    <ItemForm department={match.params.id} addItem={addItem} />

      {renderItems()}
  </Container>
 </>
);

} 
       {/*
        <>
        <ul>
        {item.name}
        <br ></br>
        {item.description}
        <br ></br>
        ${item.price}
        </ul>
          {/* <Item key={id}></Item> 
            </>
        */}



export default Items;