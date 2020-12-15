import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"

export default () =>{
    const [activeItem, setActiveItem] = useState();

    const handleClick = (e,{name})=>setActiveItem(name); 

    return(
       
        <Menu>
                <Menu.Item 
                as={NavLink} to="/"
                name='home'
                active={activeItem === 'home'}
                onClick={handleClick}
                />
            <Menu.Item
                as={NavLink} to="/departments"
                name='departments'
                active={activeItem === 'departments'}
                onClick={handleClick}
            />
      </Menu>
    
    ) 
 }