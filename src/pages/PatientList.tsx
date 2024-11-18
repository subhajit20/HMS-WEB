import { useEffect, useState } from "react"

type Props = {}

function PatientList({}: Props) {
    const [patients, setPatients] = useState<any[]>();

    useEffect(()=>{
        const getAllPatient = () =>{
            let patient = localStorage.getItem("patient");
            if(patient){
                const parsedPatientData = JSON.parse(patient).patient;
                setPatients([...parsedPatientData])
            }
        }

        getAllPatient()
    },[])
  return (
    <div className="p-10 min-h-screen bg-green" id="getAllPatient_page">
        <h1 className="underline text-3xl text-center">Patient List</h1>
        <table className="w-[50rem] overflow-x-auto mt-5">
            <thead>
                <tr className="bg-yellow-600 text-white">
                    <th>SL. NO</th>
                    <th>Patient Id</th>
                    <th>Patient Name</th>
                    <th>Patient DOB</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    patients && patients?.length > 0 && patients?.map((pd, i)=>{
                        return <tr key={pd.pId}>
                            <td>{i+1}</td>
                            <td>{pd.pId}</td>
                            <td>{pd.name}</td>
                            <td>{pd.dob}</td>
                            <td>{pd.namobileNo}</td>
                            <td>{pd.address}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default PatientList