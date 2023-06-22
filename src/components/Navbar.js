import React, { useEffect } from 'react'
import '../css/navbar.css'
import { auth, provider } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setLogin, setLogout } from '../features/user/userSlice'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar() {

    const dispatch = useDispatch()
    const location = useLocation(); // Access the current location
    const navigate = useNavigate()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    const setUser = async (user) => {
        dispatch(
            setLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            setUser(user);
            const intendedPath = location.state?.intendedPath || '/home';
            if (location.pathname === '/') {
              navigate(intendedPath);
            }
          }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [userName, navigate, location]);


    const Login = () => {
        if (!userName) {
            auth.signInWithPopup(provider).then((result) => {
                // console.log(result.user)
            }).catch((error) => {
                alert(error.message)
            })
        }
        else if (userName) {
            auth.signOut().then(() => {
                dispatch(setLogout())
                navigate('/')
            }).catch((error) => {
                alert(error.message)
            })
        }
    }

    return (
        <div id="header" role="navigation" className="section" data-limit=".15">
            <div className="header-inner">
                <a href="/" id="logo" aria-label="Link to go to the homepage">
                    <img src="/images/SpaceX_logo_black.svg.png" alt="" />
                </a>
                {userName ? <>
                    <div id="navigation">
                        <ul className="nav-links">
                            <li className="nav-item">
                                <a href="/rockets" aria-label="Learn about the Falcon Heavy vehicle">Rockets</a>
                            </li>
                            <li className="nav-item">
                                <a href="/capsules" aria-label="Learn about the Dragon vehicle">Capsules</a>
                            </li>
                            <li className="nav-item">
                                <a href="/ships" aria-label="Learn about the Dragon vehicle">Ships</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.starlink.com" aria-label="Learn about Starlink internet" target="_">Starlink</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://shop.spacex.com/" rel="noopener noreferrer" aria-label="Go to the SpaceX shop" target="_blank">Shop</a>
                            </li>
                        </ul>
                    </div>
                    <div className="signout">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                <img className='userimg' src={userPhoto} alt={userName} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={Login}>Sign Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </> :
                    <div className="login">
                        <button type="button" className="btn btn-light" onClick={Login} style={{ marginTop: '10px', marginLeft: "50vw" }}>Sign In</button>
                    </div>
                }
            </div>
            <div className="info">
                RECENT LAUNCH
                <p>
                    TRANSPORTER-8 <br /> MISSION
                </p>
                <button type="button" className="btn btn-outline-light"> <a href="https://www.spacex.com/launches/mission/?missionId=transporter-8">REWATCH </a> </button>
            </div>
        </div>
    )
}
