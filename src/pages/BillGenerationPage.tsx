import { useState } from "react";
import SearchAppointment from "../components/appointment/biillgeneration/SearchAppointment"

type Props = {}

function BillGenerationPage({}: Props) {
    const [appointmentID, setAppointmentID] = useState<string>("");
    const [appointmentDetails, setAppointmentDetails] = useState<any | null>(null);

    const searchAppointment = () =>{
        let appointment = localStorage.getItem("appointment");

        if(appointment){
            const parsed = JSON.parse(appointment);

            if(parsed.length > 0){
                console.log(parsed)
                console.log(appointmentID)
                for(let i in parsed){
                    if(parsed[i].appointmentID === appointmentID){
                        console.log(parsed[i])
                        setAppointmentDetails({...parsed[i]});
                        break;
                    }else{
                        setAppointmentDetails(null);
                    }
                }
            }
        }

    }
  return (
    <div className="p-10 min-h-screen bg-green" id="appointmentBill_page ">
        <h1 className="underline text-3xl text-center">Generate Bill</h1>

        <SearchAppointment appointmentInformation={appointmentDetails} searchAppointment={searchAppointment} onChangeAppointmentId={setAppointmentID} />

        <div id="signature" className="flex justify-end items-end h-28">
            {/* <div className="h-2 w-7 bg-black"></div> */}
            <p className="text-base font-bold">signature </p>
        </div>
    </div>
  )
}

export default BillGenerationPage