import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";

type Props = {}

interface PetientDetailsInterface{
  [patientDetailsField: string]: string;
}

const formDetails = [
  {
    name: "name",
    label: "NAME"
  },{
    name: "dob",
    label: "DOB"
  },{
    name: "gender",
    label: "GENDER"
  },{
    name: "bloodGroup",
    label: "BLOOD GROUP"
  },
  {
    name: "email",
    label: "EMAIL"
  },{
    name: "namobileNo",
    label: "MOBILE NO"
  },{
    name: "address",
    label: "ADDRESS"
  }
]

function PatientRegistration({}: Props) {
  const [patientDetails, setPatientDetails] = useState<PetientDetailsInterface>({});
  const existingIds = ["abc123", "def456", "ghi789"]; // Example existing IDs

  const generateRandomId = (length = 6) => {
    return Math.random().toString(36).substring(2, length + 2);
};

const checkUniqueId = (id: string, existing: string[]) => {
    return !existing.includes(id);
};

const generateUniqueId = (length = 6, existing: any[]) => {
    let id;
    const limit = 100; // Max attempts to find a unique ID
    let attempts = 0;

    do {
        id = generateRandomId(length);
        attempts++;
    } while (!checkUniqueId(id, existing) && attempts < limit);
    console.log(`NILD${id}`)
    return attempts < limit ? `NILD${id}` : null; // Return null if unique ID not found
};

  
  const setPatientData = (e:any) =>{
    setPatientDetails((prev)=>{
      return {...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const addPatient = () =>{
    const id = generateUniqueId(8, existingIds);
    let patient = localStorage.getItem('patient');
    if(!patient){
      localStorage.setItem('patient',JSON.stringify({
        patient:[{
          ...patientDetails,
          pId:id
        }]
      }))
      toast.success("Patient registered successfully");

      return
    }else{
      let parsedPatient = JSON.parse(patient).patient;
      console.log(parsedPatient)
      parsedPatient.push({
        ...patientDetails,
        pId:id
      })

      localStorage.setItem('patient',JSON.stringify({
        patient:[...parsedPatient]
      }))
      toast.success("Patient registered successfully");
      return
    }
  }


  return (
    <div className="p-10 min-h-screen bg-green" id="Receptionist_page ">
        <h1 className="underline text-3xl">Patient Registration Form</h1>
        <div className="flex flex-col justify-center items-center mt-4"> 
        {
          formDetails.map((fd,i)=>{
            if(fd.name === "dob"){
              return  <div key={i} className="flex justify-between items-center gap-x-4 w-full">
              {fd.label} <input name={fd.name}  onChange={setPatientData} className="outline-none border-[1.2px] border-black w-[15rem]" type="date" />
            </div>
            }else if(fd.name === "gender"){
              return  <div className="flex justify-between w-full">
                <p className="w-full ">{fd.label}</p><select name={fd.name} onChange={setPatientData} className="w-full bg-slate-200 outline-none" id="">
                <option>Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
              </div>
            }return  <div key={i} className="flex justify-between items-center gap-x-4 w-full">
            {fd.label} <input name={fd.name}  onChange={setPatientData} className="outline-none border-[1.2px] border-black w-[15rem]" type="text" />
          </div>
          })
        }

            <button className="bg-gray-700 text-white text-lg rounded-lg px-3 py-1 mt-2" onClick={addPatient}>REGISTER</button>
        </div>
        <ToastContainer />
    </div>
  )
}

export default PatientRegistration