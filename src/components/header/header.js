import {NavLink} from 'react-router-dom';
import './header.css';

const Header = () => (
    <header className='header'>
       <div>
           <NavLink className='navLink' to='games'>GAMES</NavLink>
           <NavLink className='navLink' to='news'>NEWS</NavLink>
       </div>
        <div>
            <NavLink className='navLink' to='support'>Support</NavLink>
            <NavLink className='navLink' to='my-account'>My Account</NavLink>
        </div>
    </header>
)

export default Header