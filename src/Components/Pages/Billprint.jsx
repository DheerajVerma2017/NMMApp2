//import React from 'react';
import barcode from '../../assets/barcode.webp'
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
//import JsBarcode from 'jsbarcode';
import './Billprint.css'
export const Billprint = () => {
return (
    <>
     <div className='nav-container'>
             <a href="#">GST No.</a>
             <a href="#">Address</a>
             <a href="#">Discount</a>
             <a href="#">Texable</a>
             <div className='taxes'>
               <a href="#">IGST</a>
               <a href="#">SGST</a>
             </div>
             <a href="#">CESS</a>
             <a href="#">Less</a>
             <a href="#">Total</a>
             <a href="#">Mode</a>
           </div>
           <div className="billContainer">
             <div className="line">
               <hr />
               <a href="#">Close</a>
             </div>
             <div className="buttonContainer">
               <button className='billButtonExcel'>Export Excel</button>
               <button className='billButton'>Export PDF</button>
               <button className='billButtonPrint'>Print</button>
               <button className='billButtonEdit'>Edit</button>
             </div>
             <div className="billText">
               <div className="companyAddressContainer">
                 <span id='nLetter'>N</span>
                 <p className="companyAddress">
                   <span className='companyName'>Noida Mini Mart</span>
                   09BHGPV3264H1ZX <br />
                   Noida Mini Mart <br />
                   1-4 Sector-22 Noida <br /> Mobile: +91 9599954015  <br />
                   (TAX INVOICE)
                 </p>
               </div>
               <hr />
               <p>
                 <span style={{ marginRight: '9em' }}>To. Mr Garvit </span>  Bill No: 3366    <br />
                 <span style={{ marginRight: '7em' }}>Mob. 7835886111 </span>   Date: 11-05-2025
               </p>
               <hr />
               <p>
                 <span style={{ marginRight: '10em' }}>Sr Product</span>
                 <span style={{ wordSpacing: '0.7em' }}> Qty. MRP Rate Amt.  </span>
               </p>
               <hr style={{ borderStyle: 'dotted' }} />
               <p>
                1. FM MEN COTTON, Pcs <br /> <span style={{ marginRight: '12em' }}> Disc:1503</span> <span style={{ wordSpacing: '0.7em' }}>1, 2049 599 599  </span>
               </p>
               <hr style={{ borderStyle: 'dotted' }} />
               <p>
                 2. LOWER SALE  499, Pcs <br /> <span style={{ marginRight: '12em' }}> Disc:1503</span> <span style={{ wordSpacing: '0.7em' }}>1, 2049 599 599  </span>
               </p>
               <hr style={{ borderStyle: 'dotted' }} />
               <p style={{ marginLeft: '5em', wordSpacing: '9.5em' }}> <span style={{ textDecoration: 'underline' }}>Total</span>  2</p>
               <p style={{ textAlign: 'right', marginRight: '25px' }}> <span style={{ fontSize: '35px', fontWeight: 'bold' }}>11,98.00</span>  <br /> Paid by UPI: 11,98.00 </p>
               <div className="bill-summary">
                 <p>
                   MRP Total: 4,098  <br />
                   Bill Total: 11,98 <br />
                   Total Discount : 0 <br />
                   Time: 09:22 PM
                 </p>
               </div>
                <p>
                   1. Goods sold can be replaced within 3 days. <br />
                   2. The items must be in their original condition and <br />
                   packaging.
                 </p>
                 <hr />
                 <div className="barcode">
                   <p>
                     Operator: ADMIN
                   </p>
                   <img src={barcode} alt="barcode" id='barcode'/>
                   <p>
                     ***Thank You*** <br /> 
                     Visit Again
                   </p>
                 </div>
                 <br/>
                 <button><Link to="/company">Go to Company</Link></button>
                <br/>
               <button><Link to="/Login">Go to Login</Link></button>
             </div>  
      </div>
    </>
  );
};

function  BarcodeGenerator({text}) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current && text) {
      try {
        JsBarcode(svgRef.current, text, {
          format: "CODE128", 
          lineColor: "#000",
          width: 2,
          height: 100,
          displayValue: true, 
        });
      } catch (error) {
        console.error("Error generating barcode:", error);
      }
    }
  }, [text]); 

  return (
    <div className="barcode-container">
      <svg ref={svgRef}></svg>
    </div>
  );
};
// export default Billprint
/*
import React from "react";
import { Link } from "react-router-dom";

export const BillPrint = () => {
  return (
  <>
      <h1>Bill Print </h1>
      <h2>Welcome to Bill Print Services Page</h2>
       <div>
        <br/>
        <h3>Welcome to  Services Page</h3>
        <h3>sales Bill Print show analysis your web Application.</h3>
        <br/>
        <button><Link to="/company">Go to Company</Link></button>
        <br/>
        <button><Link to="/Login">Go to Login</Link></button>
        </div>
    </>
  );
};
*/
