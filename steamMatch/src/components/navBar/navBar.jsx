import './navBar.css';
import { Link, useLocation } from 'react-router-dom';
import {useState} from 'react';


const navBar = () => {

    const location = useLocation;
    const [user, setUser] = useState(null);

    return(
        <nav>
            <ul>
                <li className={location.pathname === "/" ? "link current" : "link"}>
                    <Link to="/">INICIO</Link>
                </li>
                <li className="userSection">
                    { user ? (
                            <div className='userProfile'>
                                <img src={user.avatar} alt="Avatar de Steam" className='fotoPerfilHeader' />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <button className='buttonInicioSesion' onClick={ () => {
                                    setUser({name:AgusWink, avatar:"https://via.placeholder.com/150"})
                                }
                            }
                            >
                                Iniciar Sesión con Steam
                            </button>
                        )
                    }
                </li>
            </ul>
        </nav>
    )
}

export default navBar;