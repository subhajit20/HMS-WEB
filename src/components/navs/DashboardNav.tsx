import { RiAdminLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import AdminSidebar from "../sidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Props = {}

function DashboardNav({}: Props) {
    const navigate = useNavigate();

    const logout = () =>{
        let login = localStorage.getItem("login");

        if(login){
            localStorage.removeItem("login");
            navigate('/')
        }
    }

    useEffect(()=>{
        const login:string | null = localStorage.getItem("login");
        console.log(login)
        if(!login){
        //   console.log("Going")
            return navigate("/")
        }
    },[]);
  return (
   <>
    <div className="navbar bg-amber-950 m-0 rounded-none">
            <div className="navbar-start">
                <a className="navbar-item text-white text-xl">
                National Institute for Locomotor Disabilities
                </a>
            </div>
            <div className="navbar-end">
                <a className="navbar-item bg-white rounded-sm menu-item"><RiAdminLine /> Admin Panel</a>
                

                <div className="dropdown-container">
				<div className="dropdown">
					<label className="btn btn-ghost flex cursor-pointer px-0" tabIndex={0}>
                        <a className="navbar-item bg-white rounded-none menu-item hover:bg-transparent hover:rounded-none hover:text-black"><VscAccount /> Account</a>
					</label>
					<div className="dropdown-menu dropdown-menu-bottom-left">
						<a className="dropdown-item text-sm">Profile</a>
						<a tabIndex={-1} className="dropdown-item text-sm">Account settings</a>
						<label tabIndex={-1} htmlFor="modal-1" className="dropdown-item text-sm">Logout</label>
					</div>
				</div>
			</div>
            </div>
        </div>
        <AdminSidebar />

        {/* <label className="btn btn-primary" htmlFor="modal-1">Open Modal</label> */}
        <input className="modal-state" id="modal-1" type="checkbox" />
        <div className="modal">
            <label className="modal-overlay" htmlFor="modal-1"></label>
            <div className="modal-content flex flex-col gap-5">
                <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                <h2 className="text-xl">Do you want to logout?</h2>
                {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!</span> */}
                <div className="flex gap-3">
                    <button className="btn btn-error btn-block" onClick={logout}>Yes</button>

                    <label htmlFor="modal-1" className="btn btn-block">Cancel</label>
                </div>
            </div>
        </div>
   </>
  )
}

export default DashboardNav