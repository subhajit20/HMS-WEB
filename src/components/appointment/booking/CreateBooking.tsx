import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  patientInformation:any
}

interface AppointmentDetailsInterface{
  [field: string]: string
}

function CreateBooking(props: Props) {
  const { patientInformation } = props;
  const [appointMentDetails, setAppointMentDetails] = useState<AppointmentDetailsInterface | null>(null);

  const addAppointField = (e:any) =>{
    setAppointMentDetails((prev)=>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  }


  let departments:any = useMemo(()=>{
    return {
      EmergencyMedicine: ["Dr. Emergency Medicine A", "Dr. Emergency Medicine B", "Dr. Emergency Medicine C"],
      Cardiology:["Dr. Cardiology A", "Dr. Cardiology B", "Dr. Cardiology C"],
      Neurology: ["Dr. Neurology A", "Dr. Neurology B", "Dr. Neurology C"],
      Pediatrics: ["Dr. Pediatrics A", "Dr. Pediatrics B", "Dr. Pediatrics C"],
      Oncology: ["Dr. Oncology A", "Dr. Oncology B", "Dr. Oncology C"]
    }
  },[])

  const bookAppointment = () =>{
      console.log(patientInformation)
      console.log(appointMentDetails)

      let appointInformation = {
        ...patientInformation,
        ...appointMentDetails,
        paid: false
      }

      let appment = localStorage.getItem("appointment");

      if(!appment){
        localStorage.setItem("appointment",JSON.stringify([appointInformation]));
        toast.success("Appointment registered")
      }else{
        const parsed = JSON.parse(appment);

        parsed.push(appointInformation)

        localStorage.setItem("appointment",JSON.stringify([...parsed]));
        toast.success("Appointment registered")
      }
  }

  useEffect(()=>{
    console.log(appointMentDetails)
  },[appointMentDetails]);
  return (
    <div>
        <div className="flex flex-col justify-center items-center mt-4 gap-y-3"> 
            <div className="flex justify-between items-center w-full">
              <select name="department" onChange={addAppointField} id="" className="bg-gray-200 outline-none border-[1.2px] border-black w-full">
                <option>Select Departement</option>
                {
                  Object.entries(departments).map((dep, i)=>{
                    return <option key={i} value={dep[0]}>{dep[0]}</option>
                  })
                }
              </select>
            </div>
            <div className="flex justify-between items-center gap-x-4 w-full">
              {
                appointMentDetails !== null && appointMentDetails.department && <select name="doctor" value={appointMentDetails.doctor} id="" onChange={addAppointField} className="bg-gray-200 outline-none border-[1.2px] border-black w-full">
                  <option>Select Doctor</option>
                  {
                    departments[appointMentDetails.department].map((doc:string)=>{
                      return <option value={doc}>{doc}</option>
                    })
                  }
                </select>
                }
            
            </div>

            {/* <div className="flex justify-between items-center gap-x-4 w-full"> */}
                <div className="flex justify-between items-center gap-x-4 w-full">
                    Consultant Fee <input onChange={addAppointField} name="fee" className="outline-none border-[1.2px] border-black w-[15rem]" type="number" />
                </div>
                <div className="flex justify-between items-center gap-x-4 w-full">
                    Date <input className="outline-none border-[1.2px] border-black w-[15rem]" onChange={addAppointField} name="appointmentDate" type="date" />
                </div>
                <div className="flex justify-between items-center gap-x-4 w-full">
                    Time <input className="outline-none border-[1.2px] border-black w-[15rem]" onChange={addAppointField} name="appointmentTime" type="time" />
                </div>

        {
          appointMentDetails !== null && <div className="flex justify-center gap-x-5"> <button className="bg-gray-700 text-white text-lg rounded-lg px-3 py-1 mt-2" onClick={bookAppointment} >Book Appointment</button>
                <button className="bg-gray-700 text-white text-lg rounded-lg px-3 py-1 mt-2" >Generate Bill</button></div>
        }
                
        </div>
        <ToastContainer/>
    </div>
  )
}

export default CreateBooking