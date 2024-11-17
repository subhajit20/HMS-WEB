type SearchPatientType={
    searchPatient: ()=> void,
    onChangePatientId: React.Dispatch<React.SetStateAction<string>>,
    patientInformation: any | null;
}

const SearchPatient = (props: SearchPatientType) => {
    const { searchPatient, onChangePatientId, patientInformation } = props;
  return (
    <div>
        <div className="flex justify-center items-center gap-x-2">
            <input type="text" name="pid" onChange={(e)=> onChangePatientId(e.target.value)} className="outline-none border-[1.2px] border-black px-2 py-1" placeholder="Enter Patient ID" /> <button onClick={searchPatient} className="bg-gray-500 w-full px-2 py-1 text-white">Search Patient</button>
        </div>

        {patientInformation && <table className="table mt-5 w-full">
                    <thead>
                        <tr>
                            <th>Patient Id</th>
                            <th>Name</th>
                            <th>Book Appointment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{patientInformation.pId}</td>
                            <td>{patientInformation.name}</td>
                            <th><button className="bg-gray-500 text-white px-2 py-1">Book Appointment</button></th>
                        </tr>
                    </tbody>
                </table>}
    </div>
  )
}

export default SearchPatient