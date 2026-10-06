import './header.css';

import {useLocation, Link} from 'react-router-dom'
import navBar from "../navBar/navBar"
import { useState } from 'react';

const Header = () => {
    const location = useLocation()

    const [user, setUser] = useState(null);

    if(location.pathname === '/'){
            return NULL;
    }

    return(

        <header className='headerMain'>
            <span>
                Steam Match 
            </span>

            <navBar className={navBar}/>

        </header>
    )
}

export default header;