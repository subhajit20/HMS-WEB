import { Outlet } from 'react-router-dom';
// import Logo from '../../assets/logo.png'
import NILDLOGO from '../../assets/NILD-logo.png'
// import { MdOutlineComputer } from "react-icons/md";
import { ImTree } from "react-icons/im";
import { FaUserDoctor } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import { LuClipboardList } from "react-icons/lu";


type Props = {}

function AdminSidebar({}: Props) {
  return (
    <div className="sticky flex h-screen flex-row gap-4 overflow-y-auto rounded-none sm:overflow-x-hidden ">
	<aside className="sidebar-sticky sidebar justify-start bg-yellow-700">
		<section className="sidebar-title items-center p-4 flex justify-center">
			<img src={NILDLOGO} width={120} height={120} alt="" />
		</section>
		<section className="sidebar-content min-h-[20rem] ">
			<div className="menus flex flex-col justify-center items-center">
				<div className="dashboard_menu w-full">
					{/* <span className="menu-title text-2xl text-white bg-blue-950 w-full border-r-4 py-3 border-r-gray-400 flex justify-center items-center rounded-none"><MdOutlineComputer />Dasboard</span> */}
					<a href='#patient/reg' className='py-3 w-full hover:bg-black hover:text-white pl-2 text-white menu-item rounded-none text-xl font-normal'><ImTree className="w-4 h-4" /> Patient Registration</a>
					<a href="#appointment/booking" className='py-3 w-full hover:bg-black hover:text-white pl-2 text-white menu-item rounded-none text-xl font-normal'><FaUserDoctor /> Appointment Booking</a>
					<a href="#patient/list" className='py-3 w-full hover:bg-black hover:text-white pl-2 text-white menu-item rounded-none text-xl font-normal'><CiBoxList /> Patients List</a>
					<a href="#appointment/list" className='py-3 w-full hover:bg-black hover:text-white pl-2 text-white menu-item rounded-none text-xl font-normal'><LuClipboardList /> Appointment List</a>
					<a href="#appointment/bill" className='py-3 w-full hover:bg-black hover:text-white pl-2 text-white menu-item rounded-none text-xl font-normal'><LuClipboardList /> Generate Bill</a>
				</div>
				{/* <div className="hospital_menu w-full">
					<span className="menu-title text-2xl text-white bg-blue-950 w-full border-r-4 py-3 border-r-gray-400 flex justify-center items-center rounded-none"><CiHospital1 />Monitor Hospital</span>
					<a href="" className='py-3 w-full hover:bg-black hover:text-white pl-2 text-white menu-item rounded-none text-xl font-normal'><ImTree className="w-4 h-4" /> Department</a>
					<a href="" className='py-3 w-full hover:bg-black hover:text-white pl-2 text-white menu-item rounded-none text-xl font-normal'><FaUserDoctor /> Doctors</a>
					<a href="" className='py-3 w-full hover:bg-black hover:text-white pl-2 text-white menu-item rounded-none text-xl font-normal'><RiNurseFill /> Nurse</a>
				</div> */}
				
			</div>
		</section>
		
	</aside>
	<div className="flex w-full flex-row flex-wrap gap-4">
		<div className="my-2 grid w-full grid-cols-1">
			<div className="flex min-h-screen w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">
				<Outlet />
			</div>
		</div>
	</div>
</div>
  )
}

export default AdminSidebar