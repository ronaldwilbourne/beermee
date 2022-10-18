import {  Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className='nav'>
      
            <Link className='navtxt' to='/'><div >Home</div></Link>
            <Link className='navtxt' to='/Breweries'><div >Breweries</div></Link>
            <Link className='navtxt' to='/About'><div >About</div></Link>
       
            
         </div>
    )
}