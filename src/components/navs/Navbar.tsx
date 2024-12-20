// import Logo from '../../assets/logo.png'
// import NILDLOGO from '../../assets/NILD-logo.png'
// import { CiMenuBurger } from "react-icons/ci";
// import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

type Props = {}

function Navbar({}: Props) {
  return (
    <>
        <div className="navbar navbar-floating bg-amber-950 m-0 rounded-none">
            <div className="navbar-start">
                <a className="navbar-item text-2xl text-white">
                     National Institute for Locomotor Disabilities
                    {/* <img src={NILDLOGO} width={60} height={60} alt="" /> */}
                </a>
            </div>
            <div className="navbar-end">
                <a className="navbar-item bg-slate-500 text-white rounded-sm menu-item">Doctor Login</a>
                <a className="navbar-item bg-slate-500 text-white rounded-sm menu-item">Admin Login</a>
                <a className="navbar-item bg-slate-500 text-white rounded-sm menu-item">Patient Registration</a>
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default Navbar