import Logo from '../../assets/logo.png'
import { CiMenuBurger } from "react-icons/ci";
import { Outlet } from 'react-router-dom';

type Props = {}

function Navbar({}: Props) {
  return (
    <>
        <div className="navbar navbar-floating bg-lime-200 m-0 rounded-none">
            <div className="navbar-start">
                <a className="navbar-item">
                    <img src={Logo} width={40} height={40} alt="" />
                </a>
            </div>
            <div className="navbar-end">
                <a className="navbar-item bg-slate-600 text-white rounded-sm menu-item">Doctor Login</a>
                <a className="navbar-item bg-slate-600 text-white rounded-sm menu-item">Admin Login</a>
                <a className="navbar-item bg-slate-600 text-white rounded-sm menu-item">Patient Registration</a>
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default Navbar