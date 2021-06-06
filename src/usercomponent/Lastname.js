import {useState,useEffect} from 'react';
import axios from 'axios';
import loader from './loader1.gif'	
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Link as NavLink} from 'react-router-dom'


function Lastname()
{
	const[details2,setDetails2]=useState([]);

    useEffect(()=>
		{

			axios.get('https://reqres.in/api/users')
			.then((res)=>{
				console.log(res.data.data)
				setDetails2(res.data.data)


			})
			.catch((err)=>
			{
				console.log("some error came");
				console.log(err.toString());
			})
			.finally(()=>{
				console.log("job done");
			})
	},[]);

	function sorted(pros)
	{
		return function(a,b)
		{
			if(a[pros]>b[pros]){
				return 1;
			}
			else if(a[pros]<b[pros])
			{
				return -1;
			}
			return 0;
		}
	}

details2.sort(sorted("last_name"));


	return(
		<div>
		<div className="text-center mt-5">
		<div className="container mt-5">
			
			<div className="row">
			{
				details2.map(function(val){
					return<div className="myid" className="col-11 col-md-4 col-sm-4" id="myid">
					<div className="card-group">
					<a  id="anc" href={val.avatar}  className="card">
					<div className="card">
						<div><img  src={val.avatar} class="card-img-top" alt="..."/>
						  <div className="m-auto">
						  <div class="card-body">
								<h5 class="card-title">first_name:{val.first_name}</h5>
								<h5 class="card-text">last_name:{val.last_name}</h5>
								</div>
						  </div>
						</div>
					  </div>
					  </a>
					</div>
					</div>
				})
			}
			</div>
			</div>
		</div>
		</div>
	)
}
export default Lastname;
