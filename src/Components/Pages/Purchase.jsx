
import { useState } from 'react';
import './Purchase.css';
import { Link } from "react-router-dom";
export const Purchase = () => {
  const [formData, setFormData] = useState({
    type: 'Purchase',
    refNo: '',
    name: '',
    mobile: '',
    address: '',
    cardNo: '',
    invoiceNo: '',
    gstNo: '',
    state: '',
    date: new Date().toISOString().split('T')[0],
    items: [{
      barcode: '',
      brand: '',
      description: '',
      category: 'General',
      stockType: 'General Goods',
      unit: '',
      rate: '',
      profit: '',
      hsn: '',
      gstPercent: '',
      salePrice: '',
      mrp: '',
      error: ''
    }],
    payment: {
      cash: 0,
      card: 0,
      upi: 0,
      total: 0
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newItems = [...prev.items];
      newItems[index] = { ...newItems[index], [name]: value };
      return { ...prev, items: newItems };
    });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      payment: { ...prev.payment, [name]: parseFloat(value) || 0 }
    }));
  };
  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [
        ...prev.items,
        {
          barcode: '',
          brand: '',
          description: '',
          category: 'General',
          stockType: 'General Goods',
          unit: '',
          rate: '',
          profit: '',
          hsn: '',
          gstPercent: '',
          salePrice: '',
          mrp: '',
          error: ''
        }
      ]
    }));
  };

  const removeItem = (index) => {
    setFormData(prev => {
      const newItems = [...prev.items];
      newItems.splice(index, 1);
      return { ...prev, items: newItems };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate total
    const total = formData.items.reduce((sum, item) => {
      return sum + (parseFloat(item.salePrice) || 0);
    }, 0);
    
    const updatedForm = {
      ...formData,
      payment: { ...formData.payment, total }
    };
    
    console.log('Form submitted:', updatedForm);
    // Here you would typically send data to your backend
  };

  return (
    <>
    <div className="purchase-container">
      <h1>PURCHASE</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label>Type</label>
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="Purchase">Purchase</option>
                <option value="Return">Return</option>
                <option value="Exchange">Exchange</option>
                <option value="Repair">Repair</option>
                <option value="Replacement">Replacement</option>
                <option value="Refund">Refund</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>
            </div>
            <div className="form-group">
              <label>Ref. No.</label>
              <input type="text" name="refNo" value={formData.refNo} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label>Card No.</label>
              <input type="text" name="cardNo" value={formData.cardNo} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Invoice No.</label>
              <input type="text" name="invoiceNo" value={formData.invoiceNo} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>GST No.</label>
              <input type="text" name="gstNo" value={formData.gstNo} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </div>
        </div>

        <div className="items-section">
          <h3>Add New Product Items</h3>
          <button type="button" onClick={addItem} className="add-item-btn">
            + Add New Product Item
          </button>

          {formData.items.map((item, index) => (
            <div key={index} className="item-row">
              <div className="form-row">
                <div className="form-group">
                  <label>Barcode</label>
                  <input
                    type="text"
                    name="barcode"
                    value={item.barcode}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </div>
                <div className="form-group">
                  <label>Brand</label>
                  <input
                    type="text"
                    name="brand"
                    value={item.brand}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  value={item.description}
                  onChange={(e) => handleItemChange(index, e)}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Category</label>
                  <select
                    name="category"
                    value={item.category}
                    onChange={(e) => handleItemChange(index, e)}
                  >
                    <option value="General">General</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Grocery">Grocery</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Stock Type</label>
                  <select
                    name="stockType"
                    value={item.stockType}
                    onChange={(e) => handleItemChange(index, e)}
                  >
                    <option value="General Goods">General Goods</option>
                    <option value="Perishable">Perishable</option>
                    <option value="Fragile">Fragile</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Unit</label>
                  <input
                    type="text"
                    name="unit"
                    value={item.unit}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </div>
                <div className="form-group">
                  <label>Rate</label>
                  <input
                    type="number"
                    name="rate"
                    value={item.rate}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>HSN</label>
                  <input
                    type="text"
                    name="hsn"
                    value={item.hsn}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </div>
                <div className="form-group">
                  <label>GST %</label>
                  <input
                    type="number"
                    name="gstPercent"
                    value={item.gstPercent}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Sale Price</label>
                  <input
                    type="number"
                    name="salePrice"
                    value={item.salePrice}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </div>
                <div className="form-group">
                  <label>MRP</label>
                  <input
                    type="number"
                    name="mrp"
                    value={item.mrp}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </div>
              </div>

              {formData.items.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="remove-item-btn"
                >
                  Remove Item
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="payment-section">
          <h3>PAYMENT DETAILS</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Cash</label>
              <input
                type="number"
                name="cash"
                value={formData.payment.cash}
                onChange={handlePaymentChange}
              />
            </div>
            <div className="form-group">
              <label>Card</label>
              <input
                type="number"
                name="card"
                value={formData.payment.card}
                onChange={handlePaymentChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>UPI</label>
              <input
                type="number"
                name="upi"
                value={formData.payment.upi}
                onChange={handlePaymentChange}
              />
            </div>
            <div className="form-group">
              <label>Total</label>
              <input
                type="number"
                name="total"
                value={formData.payment.total}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Save Purchase
          </button>
          <button type="button" className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
      <br/>
      <button><Link to="/inventory">Go to Inventory</Link></button>
        <br/>
        <button><Link to="/Login">Go to Login</Link></button>
    </div>
    </>
  );
};

/*
import React from 'react'
import { Link } from 'react-router-dom'

export const Purchase = () => {
  return (
    <div>
      <h1>Purchase</h1>
      <h2>Services</h2>
      <h2>Welcome to Purchase Services our Page </h2>
      
        <button><Link to="/inventory">Go to Inventory</Link></button>
        <br/>
        <button><Link to="/Login">Go to Login</Link></button>
    </div>
  );
};
*/