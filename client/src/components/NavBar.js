// import { useState } from "react"
import { Link } from "react-router-dom"
// import { Menu } from "semantic-ui-react"

export default () =>{
    // const [activeItem, setActiveItem] = useState();

    // const handleClick = (e,{name})=>setActiveItem(name); 

    return(
       <>
        
            <Link to='/'>Home</Link>
                {/* <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleClick}
                /> */}
            

            <Link to='/departments'>Departments</Link>
                {/* <Menu.Item
                name='departments'
                active={activeItem === 'departments'}
                onClick={handleClick}
                /> */}
        </>
    ) 
 }