import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SideBar.css';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const SideBar = () =>{
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  
    return(
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose/>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/"><AiIcons.AiFillHome /><span>Home</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/Inv"><IoIcons.IoIosPaper /><span>Invoices</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/InvDet/0/0"><FaIcons.FaCartPlus /><span>Invoice Details</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/Support"><IoIcons.IoMdHelpCircle /><span>Support</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    )
}

export default SideBar;