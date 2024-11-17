import { RiAdminLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import AdminSidebar from "../sidebar/AdminSidebar";

type Props = {}

function DashboardNav({}: Props) {
  return (
   <>
    <div className="navbar bg-slate-950 m-0 rounded-none">
            <div className="navbar-start">
                <a className="navbar-item text-white text-xl">
                National Institute For Locomotor Disabilities
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
						<a tabIndex={-1} className="dropdown-item text-sm">Subscriptions</a>
					</div>
				</div>
			</div>
            </div>
        </div>
        <AdminSidebar />
   </>
  )
}

export default DashboardNav