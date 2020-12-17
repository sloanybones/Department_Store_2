import Axios from 'axios';
import { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Item from "./Item";


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


  // const readSingleItem = async (itemId) => {
  //   try {
  //     let res = await Axios.get(
  //       `/api/departments/${departmentId}/items/${itemId}`
  //     );
  //     console.log(res.data);
  //   } catch (err) {}
  // };

  // const addItem = async (item) => {
  //   try {
  //     let res = await Axios.post(`/api/departments/${departmentId}/items`, item);
  //     console.log(res.data);
  //   } catch (err) {}
  // };

  // const updateItem = async (id, item) => {
  //   try {
  //     let res = await Axios.put(
  //       `/api/departments/${departmentId}/items/${id}, item`
  //     );
  //     console.log(res.data)
  //   } catch (err) {}
  // };

  const renderItems = (props) => {
    return items.map((item) => {
      return (
        <>
        <ul>
        {item.name}
        <br ></br>
        {item.description}
        <br ></br>
        ${item.price}
        </ul>
          {/* <Item key={id}></Item> */}
        </>
      )

      }
    )

  };

return (        
  <>
  <h1>These are items</h1>
    {renderItems()}
 </>
);

} 
       {/*
        */}



export default Items;