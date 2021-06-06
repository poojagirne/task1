import {useState,useEffect} from 'react';
import axios from 'axios';
import loader from './loader1.gif'	
import {BrowserRouter,Switch,Route,Link as NavLink} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Dropdown} from 'react-bootstrap';

function Navbar()
{
    const[showImg,setimage1]=useState(false);

    	useEffect(()=>
		{
			setimage1(true);
			setTimeout(()=>
            {
				setimage1(false);
		},3000)
	},[]);
    return(
        <div className="text-center mt-5"> {showImg?<img src={loader}/>:
          <div className="col-md-3 col-sm-3 offset-md-9 mt-3">
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">sorted by</Dropdown.Toggle>
                <Dropdown.Menu>
                  <NavLink exac to="/"><Dropdown.Item href="#/action-1">None</Dropdown.Item></NavLink> 
                  <NavLink exac to="/Firstname">  <Dropdown.Item href="#/action-2">First name</Dropdown.Item></NavLink> 
                  <NavLink exac to="/Lastname"> <Dropdown.Item href="#/action-3">Last name</Dropdown.Item></NavLink> 
                </Dropdown.Menu>
           </Dropdown>
           </div>}
        </div>
    )
}
export default Navbar;