import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Company.css';

export const Company = () =>{
  const [formData, setFormData] = useState({
    companyName: 'NMM Company',
    taxType: 'GST (SGST+CGST,IGST)',
    gstinNo: 'NM1234567890',
    state: 'Uttar Pradesh (62)',
    address: "W- Sector-12' Noida",
    pincode: '201301',
    invoiceSerialNo: 'A- 1:000',
    invoiceHeader: 'Noida: +4\n+4 Sector-4 Noida\nMobile: +91 959997',
    invoiceFooter: '1. Goods sold can be replaced within 3 days.\n2. The items must be in their original condition and packaging.',
    invoiceSize: 'POS Thermal (80mm)',
    timeZone: 'India (Asia/Kolkata)',
    logo: null
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      // Here you would typically send data to an API
      console.log('Form submitted:', formData);
      alert('Company details saved successfully!');
      Link('/dashboard'); // Redirect after save
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.companyName.trim()) errors.companyName = 'Company name is required';
    if (!formData.taxType) errors.taxType = 'Tax type is required';
    if (formData.taxType.includes('GST') && !formData.gstinNo.trim()) {
      errors.gstinNo = 'GSTIN is required for GST tax type';
    }
    return errors;
  };

  return (
    <div className="company-container">
      <h1>Company Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* Row 1 */}
          <div className="form-group">
            <label htmlFor="companyName">Company Name*</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={errors.companyName ? 'error' : ''}
            />
            {errors.companyName && <span className="error-message">{errors.companyName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="taxType">Tax Type*</label>
            <select
              id="taxType"
              name="taxType"
              value={formData.taxType}
              onChange={handleChange}
              className={errors.taxType ? 'error' : ''}
            >
              <option value="GST (SGST+CGST,IGST)">GST (SGST+CGST,IGST)</option>
              <option value="VAT">VAT</option>
              <option value="No Tax">No Tax</option>
            </select>
            {errors.taxType && <span className="error-message">{errors.taxType}</span>}
          </div>

          {/* Row 2 */}
          <div className="form-group">
            <label htmlFor="gstinNo">GSTIN No.</label>
            <input
              type="text"
              id="gstinNo"
              name="gstinNo"
              value={formData.gstinNo}
              onChange={handleChange}
              className={errors.gstinNo ? 'error' : ''}
              disabled={!formData.taxType.includes('GST')}
            />
            {errors.gstinNo && <span className="error-message">{errors.gstinNo}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="logo">Company Logo</label>
            <div className="file-upload">
              <input
                type="file"
                id="logo"
                name="logo"
                onChange={handleChange}
                accept="image/*"
              />
              <label htmlFor="logo" className="file-upload-label">
                {formData.logo ? formData.logo.name : 'Choose File'}
              </label>
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-group">
            <label>State</label>
            <div className="state-container">
              <input
                type="text"
                value={formData.state}
                readOnly
                className="state-input"
              />
              <div className="file-upload">
                <input
                  type="file"
                  id="sign"
                  name="sign"
                  onChange={handleChange}
                  accept="image/*"
                />
                <label htmlFor="sign" className="file-upload-label">
                  Sign
                </label>
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="form-group full-width">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          {/* Row 5 */}
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="invoiceSerialNo">Invoice Serial No.</label>
            <input
              type="text"
              id="invoiceSerialNo"
              name="invoiceSerialNo"
              value={formData.invoiceSerialNo}
              onChange={handleChange}
            />
            <small className="hint">auto adjust on bill delete</small>
          </div>

          {/* Row 6 */}
          <div className="form-group full-width">
            <label htmlFor="invoiceHeader">Invoice Header</label>
            <textarea
              id="invoiceHeader"
              name="invoiceHeader"
              value={formData.invoiceHeader}
              onChange={handleChange}
              rows="3"
            />
          </div>

          {/* Row 7 */}
          <div className="form-group full-width">
            <label htmlFor="invoiceFooter">Invoice Footer</label>
            <textarea
              id="invoiceFooter"
              name="invoiceFooter"
              value={formData.invoiceFooter}
              onChange={handleChange}
              rows="3"
            />
          </div>

          {/* Row 8 */}
          <div className="form-group">
            <label htmlFor="invoiceSize">Invoice Size</label>
            <select
              id="invoiceSize"
              name="invoiceSize"
              value={formData.invoiceSize}
              onChange={handleChange}
            >
              <option value="POS Thermal (80mm)">POS Thermal (80mm)</option>
              <option value="A4 (210mm × 297mm)">A4 (210mm × 297mm)</option>
              <option value="Letter (216mm × 279mm)">Letter (216mm × 279mm)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="timeZone">Time Zone</label>
            <select
              id="timeZone"
              name="timeZone"
              value={formData.timeZone}
              onChange={handleChange}
            >
              <option value="India (Asia/Kolkata)">India (Asia/Kolkata)</option>
              <option value="UTC">UTC</option>
              <option value="EST (America/New_York)">EST (America/New_York)</option>
            </select>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="save-button">Save Company</button>
          <br/>
          <button><Link to="/purchase">Go to Purchase</Link></button>
          <br/>
          <br></br>
          <button><Link to="/Logout">Logout</Link></button>
        </div>
      </form>
    </div>
  );
};




/*
import React from 'react'
import { Link } from 'react-router-dom'

export const Company = () =>{
  return (
    <div>
        <h1>Company</h1>
        <p>Welcome to your Company! Page you can manage your company information.</p>
        <br/>
        <button><Link to="/settings">Go to Settings</Link></button>
         <br/>
        <button><Link to="/logout">Go to Logout</Link></button>
    </div>
  );
};

*/
//export default Dashboard