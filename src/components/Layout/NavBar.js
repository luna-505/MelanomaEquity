import { Link, NavLink } from "react-router-dom";
import '../../assets/styles/NavBar.css'; 

// NavLink can detect which link is active 
function NavBar() {
    return (
        <ul className='nav'>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about-melanoma'>All About Melanoma</NavLink>
            </li>
            <li>
                <NavLink to='detection'>Detection Tools</NavLink>
            </li>
            <li>
                <NavLink to='resources'>Resources</NavLink>
            </li>
            <li>
                <NavLink to='your-voice'>Your Voice!</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;
