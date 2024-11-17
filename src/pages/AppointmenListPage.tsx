import { useEffect, useState } from "react"

type Props = {}

function AppointmenListPage({}: Props) {
    let [allAppointments, setAllAppointment] = useState<any[]>([]);

    useEffect(()=>{
        const getAppoints = () =>{
            let appointments = localStorage.getItem("appointment");

            if(appointments){
                let parsedaAppointments = JSON.parse(appointments);

                setAllAppointment([...parsedaAppointments]);
            }
        }
        getAppoints()
    },[])
  return (
    <div className="p-10 min-h-screen bg-green" id="appointmentList_page ">
        <h1 className="underline text-3xl text-center">Appointment List Page</h1>
        <div className="flex w-full overflow-x-auto py-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>SL. NO</th>
                        <th>Appointment ID</th>
                        <th>Patient Id</th>
                        <th>Name</th>
                        <th>Consultant Fee</th>
                        <th>Paymet Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAppointments.length > 0 && allAppointments.map((app,i)=>{
                            return  <tr>
                            <th>{i+1}</th>
                            <th>Appointment Id</th>
                            <td>{app.pId}</td>
                            <td>{app.name}</td>
                            <td className="font-sans">₹{app.fee}</td>
                            <td>
                                <div className={`${app.paid === true ? "text-green-600": "text-red-600"}`}>{app.paid === true ? "Done" : "Not Done"}</div></td>
                        </tr>
                        })
                    }
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AppointmenListPage