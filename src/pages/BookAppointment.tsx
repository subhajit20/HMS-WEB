import { useMemo, useState } from "react"
import SearchPatient from "../components/appointment/booking/SearchPatient"
import CreateBooking from "../components/appointment/booking/CreateBooking";
// type Props = {}

const BookAppointment = () => {
    const [pid, setPid] = useState<string>("");
    const [patientDetaiils, setPatientDetaiils] = useState<any | null>(null);
    // const [stepCount, setStepCount] = useState<number>(0)


    const searchPatient = () =>{
        let patient = localStorage.getItem("patient");

        if(patient){
            const parsed = JSON.parse(patient).patient;

            if(parsed.length > 0){
                console.log(parsed)
                console.log(pid)
                for(let i in parsed){
                    if(parsed[i].pId === pid){
                        console.log(parsed[i])
                        setPatientDetaiils({...parsed[i]});
                        break;
                    }else{
                        setPatientDetaiils(null);
                    }
                }
            }
        }

    }

    let steps = useMemo(()=>{
        return [
            <SearchPatient patientInformation={patientDetaiils} searchPatient={searchPatient} onChangePatientId={setPid} />
        ]
    },[patientDetaiils,pid])

  return (
    <div className="p-10 min-h-screen bg-green" id="bookingAppointment_page">
        {steps[0]}
        {
            patientDetaiils !== null && <CreateBooking patientInformation={patientDetaiils} />
        }
        
    </div>
  )
}

export default BookAppointment