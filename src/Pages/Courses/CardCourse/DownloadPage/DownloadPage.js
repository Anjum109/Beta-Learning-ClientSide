import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';


const DownloadPage = ({ rootElementId, downloadFileName }) => {
    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p", "pt", "a4")
            pdf.addImage(imgData, "JPEG", 10, 50)
            pdf.save(`${downloadFileName}`)
        })
    }

    return (
        <div>
            <Button className='button-29 mt-5 mb-3' onClick={downloadFileDocument}>Download Page<FaFileDownload className='ms-3'></FaFileDownload> </Button>
        </div>
    );
};

export default DownloadPage;