import React, { useState, useEffect } from 'react';
import { IoIosLock } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import '../../App.css';


const Lists = () => {
    const [show, setShow] = useState(1);
    const tabLabels = document.querySelectorAll('[data-tab-label]');
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.activeTab === 'been') {
          setShow(1);
        } else if (location.state && location.state.activeTab === 'wantToTry') {
          setShow(2);
        } else if (location.state && location.state.activeTab === 'recs') {
          setShow(3);
        } else {
          setShow(1);
        }
    }, [location]);

    const clickedTab = (num) => {
        setShow(num);
        tabLabels.forEach(currTab => {
            currTab.classList.remove('addBold');
        });
    }

    const navigate = useNavigate();
    const goToRestaurantPage = () => {
        navigate('/restaurant');
      };

    return (
        <div className="page-container">
            <div>
                <h1 className='listsHeader'>
                    Lists
                </h1>
                <ul className='listsUl'>
                    <li onClick={() => clickedTab(1)} data-tab-label className={`tabList ${show === 1 ? 'addBold' : ''}`}>Been</li>
                    <li onClick={() => setShow(2)} data-tab-label className={`tabList ${show === 2 ? 'addBold' : ''}`}>Want to Try</li>
                    <li onClick={() => setShow(3)} data-tab-label className={`tabList ${show === 3 ? 'addBold' : ''}`}>Recs</li>
                    <li onClick={() => setShow(4)} data-tab-label className={`tabList ${show === 4 ? 'addBold' : ''}`}>Specials</li>
                </ul>
                <div class='content'>
                    <div className={show === 1 ? 'active' : 'none'}>
                        <p>
                            <ol>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                            </ol>
                        </p>
                    </div>
                    <div className={show === 2 ? 'active' : 'none'}>
                        <p>
                            <ol>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                            </ol>
                        </p>
                    </div>
                    <div className={show === 3 ? 'active' : 'none'}>
                        <p>
                            <ol>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        $$$ | Restaurant Description
                                        <br /> Address
                                    </p>
                                </li>
                            </ol>
                        </p>
                    </div>
                    <div className={show === 4 ? 'active' : 'none'}>
                        <p>
                            <ol>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        Restaurant Special Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        Restaurant Special Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        Restaurant Special Description
                                        <br /> Address
                                    </p>
                                </li>
                                <li className='resList' onClick={goToRestaurantPage}>
                                    Restaurant Name
                                    <div class='circle'><IoIosLock /></div>
                                    <p className='resContent'>
                                        Restaurant Special Description
                                        <br /> Address
                                    </p>
                                </li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Lists;
