import { useRef, useState } from "react";
import SearchAppointment from "../components/appointment/biillgeneration/SearchAppointment";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type Props = {}

function BillGenerationPage({}: Props) {
    const [appointmentID, setAppointmentID] = useState<string>("");
    const [appointmentDetails, setAppointmentDetails] = useState<any | null>(null);
    const printRef = useRef(null);

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element!);
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
    };
    

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
    <div ref={printRef} className="p-10 min-h-screen bg-green" id="appointmentBill_page ">
        <h1 className="underline text-3xl text-center">Generate Bill</h1>

        <SearchAppointment appointmentInformation={appointmentDetails} searchAppointment={searchAppointment} onChangeAppointmentId={setAppointmentID} />

        <div id="signature" className="flex justify-between items-end h-28">
            {/* <div className="h-2 w-7 bg-black"></div> */}
            <div className="flex justify-center gap-x-4">
                <button className="btn btn-sm btn-primary" onClick={()=> window.print()}>Print</button>
                <button className="btn btn-sm btn-primary" onClick={handleDownloadPdf}>PDF</button>
            </div>
            <p className="text-base font-bold">Signature </p>
        </div>
    </div>
  )
}

export default BillGenerationPage