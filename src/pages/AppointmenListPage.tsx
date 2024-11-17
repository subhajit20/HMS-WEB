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
    <div>
        <div className="flex w-full overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>SL. NO</th>
                        <th>Appointment ID</th>
                        <th>Patient Id</th>
                        <th>Name</th>
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