import './details.css'

type SearchPatientType={
    searchAppointment: ()=> void,
    onChangeAppointmentId: React.Dispatch<React.SetStateAction<string>>,
    appointmentInformation: any | null;
}

const SearchAppointment = (props: SearchPatientType) => {
    const { searchAppointment, onChangeAppointmentId, appointmentInformation } = props;
  return (
    <div>
        <div className="flex justify-center items-center gap-x-2">
            <input type="text" name="pid" onChange={(e)=> onChangeAppointmentId(e.target.value)} className="outline-none border-[1.2px] border-black px-2 py-1" placeholder="Enter Patient ID" /> <button onClick={searchAppointment} className="bg-gray-500 w-[10rem] px-2 py-1 text-white">Search Patient</button>
        </div>

        <h1 className="text-center pt-5 underline">BILL OF SUPPLY</h1>
        {appointmentInformation && <table id="details" className="mt-2 border-none w-[40rem]">
                    <tbody>
                        <tr>
                            <td>Mobile No.</td>
                            <td>: {appointmentInformation.namobileNo}</td>
                        </tr>
                        <tr>
                            <td>Patient Name</td>
                            <td>: {appointmentInformation.name}</td>
                        </tr>
                        <tr>
                            <td>Age/Sex</td>
                            <td>: 34 / {appointmentInformation.gender}</td>
                            <td>Patient ID</td>
                            <td>: {appointmentInformation.pId}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>: {appointmentInformation.address}</td>
                            <td>Bill No</td>
                            <td>: C9456</td>

                            <td>Bill Date</td>
                            <td>: 23/5/20240</td>
                        </tr>
                    </tbody>
                </table>}

        
        {appointmentInformation && <table className="mt-2 w-[50rem]">
                    <thead className="bg-green-500">
                        <tr className="h-16">
                            <th>SL. NO</th>
                            <th>Appointment Id</th>
                            <th>Patient Id</th>
                            {/* <th>Name</th> */}
                            <th>Consultant Fee</th>
                            <th>Discount</th>
                            <th>Tax Amt(Tax %)</th>
                            <th>Bill Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-green-100 h-12">
                            <td>1</td>
                            <td>{appointmentInformation.appointmentID}</td>
                            <td>{appointmentInformation.pId}</td>
                            {/* <th>{appointmentInformation.name}</th> */}
                            <th>{appointmentInformation.fee}</th>
                            <th></th>
                            <th>{appointmentInformation.fee}</th>
                            <th>{appointmentInformation.fee}</th>
                        </tr>
                    </tbody>
                </table>}

                <div>

                </div>
    </div>
  )
}

export default SearchAppointment