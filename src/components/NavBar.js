export default function NavBar(){
    return(
        <div className='nav'>
            <Link className='navtxt' to='/'><div >Home</div></Link>
            <Link className='navtxt' to='/cocktails'><div >Cocktails</div></Link>
            <Link className='navtxt' to='/about'><div >About</div></Link>
            
         </div>
    )
}