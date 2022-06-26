import React from "react";
import { Link } from "react-router-dom";
import Reactlogo from "../images/logo.jpeg"


const Navbar =() => {
    return (
        <div className="sum">
            <div className="logo ">
                <img src={Reactlogo} />
            </div>
            <div className="item">
                <ul className="ul">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/business'>Business</Link>
                    </li>
                    <li>
                        <Link to='/politic'>Politic</Link>
                    </li>
                    <li>
                        <Link to='/sport'>Sport</Link>                   
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar