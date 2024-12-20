import { useEffect, useState } from 'react';
import DoctorLogin from '../assets/doctor-login.avif'
// import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import NILDLOGO from '../assets/NILD-logo.png'
import { toast, ToastContainer } from 'react-toastify';
type Props = {}

function LoginPage({}: Props) {
  const [pid, setPid] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();


  const patient_login = [{
    pID:'PA2024',
    password:"HOSPITAL2024"
  }]

  const login = () =>{
    console.log(pid)
    console.log(password)
    for(let i in patient_login){
      console.log(patient_login[i])
      if(patient_login[i].pID === pid && patient_login[i].password === password){
        console.log("Okkk");
        localStorage.setItem("login","1");
        toast.success("Login successful! Please wait...")
        setTimeout(()=>{
          navigate('/patient/reg');
        },1000);
        return;
      }
    }

    toast.error("Login failed!")
  }

  useEffect(()=>{
    const login:string | null = localStorage.getItem("login");
    console.log(login)
    if(login && login === "1"){
        console.log("Going")
        return navigate("/patient/reg")
    }
},[]);
  return (
    <div id="login_page" className='min-h-screen relative'>
        <div className='flex justify-around items-center h-[40rem] '>
            <div className='left flex flex-col justify-center items-center gap-y-3'>
                <img src={NILDLOGO} width={150} height={150} alt="" />
                <input type="text" onChange={(e)=> setPid(e.target.value)} name="" placeholder='User Id' className='pl-2 border-[1.2px] border-blue-950 outline-none w-[17rem] h-9 rounded-md' />
                <input type="password" onChange={(e)=> setPassword(e.target.value)} name="" placeholder='Pasword' className='pl-2 border-[1.2px] border-blue-950 outline-none w-[17rem] h-9 rounded-md' />
               {/* <div className='font-semibold'>
                    Receptionist  <input type="checkbox" className="switch switch-success" defaultChecked /> Doctor
               </div> */}
               <a className='w-full' onClick={login}>
                  <button className='btn btn-warning text-black text-lg w-full btn-sm' >Login</button>
               </a>
            </div>
            <div className='right'>
                <img src={DoctorLogin} width={500} height={500} alt="" />
            </div>
        </div>
        <ToastContainer />
        <div className='fixed bottom-[10px] right-[20px] text-center opacity-40'>
					{/* <h1 className='uppercase'>Designed by</h1> */}
					<h1 className='uppercase text-[0.8rem]'>Mevrick Solution Pvt Ltd</h1>
					<h1 className='uppercase text-[0.9rem]'>Hospital Management System</h1>
					<h1 className='uppercase text-[0.6rem]'>Confidential - For Internal Use Only</h1>
				</div>
    </div>
  )
}

export default LoginPage