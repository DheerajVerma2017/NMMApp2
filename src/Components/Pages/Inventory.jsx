import { useState, setInventory, useEffect } from 'react';
import { FaPrint, FaFileExcel, FaSearch, FaSave, FaFilter } from 'react-icons/fa';
import './Inventory.css';

export const Inventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, description: 'R SHORT W', category: 'Women active wear', location: '2 day', status: 'OK', barcode: 'A1045', city: '61 PC3', stock: 180 },
    { id: 2, description: 'CLOTH SHORT', category: 'MENACTIVE VICAR', location: '2 day', status: 'OK', barcode: 'A1045', city: '41 PC3', stock: 200 },
    { id: 3, description: 'L FROCK', category: 'Women active wear', location: '5 day', status: 'OK', barcode: 'A1045', city: '6 PC3', stock: 400 },
    { id: 4, description: 'KID TOP SET', category: 'Kids Active Wear', location: '5 day', status: 'OK', barcode: 'A1045', city: '16 PC3', stock: 125 },
    { id: 5, description: 'CAPRI MEMS', category: 'MENACTIVE VICAR', location: '6 day', status: 'OK', barcode: 'A1045', city: '8 PC3', stock: 535 },
    { id: 6, description: 'CARGO WOMEN', category: 'Women active wear', location: '15 day', status: 'OK', barcode: 'A1045', city: '12 PC3', stock: 680 },
    { id: 7, description: 'LOWER SALE W 249', category: 'MENACTIVE VICAR', location: '15 day', status: 'OK', barcode: 'A1045', city: '4 PC3', stock: 249 },
    { id: 8, description: 'SHIRT MEM WS', category: 'MENACTIVE VICAR', location: '16 day', status: 'OK', barcode: 'A1045', city: '9 PC3', stock: 600 },
    { id: 9, description: 'JK SOCKS 149', category: 'Accessories', location: '16 day', status: 'OK', barcode: 'A1045', city: '6 PC3', stock: 159 },
    { id: 10, description: 'KID JEANS', category: 'Kid choice wear', location: '15 day', status: 'OK', barcode: 'A1045', city: '29 PC3', stock: 300 },
    { id: 11, description: 'PACK T-SHIRT', category: 'MENACTIVE VICAR', location: '26 day', status: 'OK', barcode: 'A1045', city: '5 PC3', stock: 400 },
    { id: 12, description: 'LOWER SALE 249', category: 'MENACTIVE VICAR', location: '2 day', status: 'OK', barcode: 'A1045', city: '18 PC3', stock: 249 },
    { id: 13, description: 'LOWER SALE 349', category: 'MENACTIVE VICAR', location: '15 day', status: 'OK', barcode: 'A1045', city: '118 PC3', stock: 349 },
    { id: 14, description: 'GROP TOP', category: 'Women active wear', location: 'SAMARA', status: 'OK', barcode: 'A1045', city: '44 PC3', stock: 199 },
    { id: 15, description: 'Kids Lower', category: 'General', location: 'PL', status: 'OK', barcode: 'A1045', city: '13 PC3', stock: 150 },
    { id: 16, description: 'Kids Prods', category: 'Kids Active Wear', location: '36 day', status: 'OK', barcode: 'A1045', city: '6 PC3', stock: 150 },
    { id: 17, description: 'Kids Set Q-3', category: 'Kids Active Wear', location: '36 day', status: 'OK', barcode: 'A1045', city: '6 PC3', stock: 250 },
    { id: 18, description: 'Night Shift', category: 'General', location: '36 day', status: 'OK', barcode: 'A1045', city: '14 PC3', stock: 500 }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterStock, setFilterStock] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });

  const categories = ['All', ...new Set(inventory.map(item => item.category))];
  const statuses = ['All', ...new Set(inventory.map(item => item.status))];

  const handlePrint = () => {
    window.print();
  };

  const exportToExcel = () => {
    // Implement Excel export functionality
    console.log('Exporting to Excel');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredInventory = inventory
    .filter(item => {
      const matchesSearch = item.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.barcode.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
      const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
      const matchesStock = filterStock === 'All' || 
                         (filterStock === 'Low' && item.stock < 50) || 
                         (filterStock === 'Expiring' && item.location.includes('day') && parseInt(item.location) < 10);

      return matchesSearch && matchesCategory && matchesStatus && matchesStock;
    })
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

  return (
    <>
    <div className="inventory-container">
      <h1>INVENTORY MANAGEMENT</h1>
      <div className="toolbar">
        <div className="action-buttons">
           <button onClick={exportToExcel} className="excel-btn">
            <FaFileExcel /> Excel Report
          </button>
          <button onClick={handlePrint} className="print-btn">
            <FaPrint /> Print Report
          </button>
          <button className="save-btn">
            <FaSave /> Save
          </button>
            <button className="report-btn">Barcode</button>
        </div>

        <div className="search-filter">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search description or barcode..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <div className="filter-group">
            <label>Category:</label>
            <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Status:</label>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Stock:</label>
            <select value={filterStock} onChange={(e) => setFilterStock(e.target.value)}>
              <option value="All">All Items</option>
              <option value="Low">Low Stock</option>
              <option value="Expiring">Expiring Soon</option>
            </select>
          </div>
        </div>
      </div>

      <div className="inventory-table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('id')}>#</th>
              <th onClick={() => handleSort('description')}>Description</th>
              <th onClick={() => handleSort('category')}>Category</th>
              <th onClick={() => handleSort('location')}>Location/Ageing</th>
              <th onClick={() => handleSort('status')}>Status</th>
              <th onClick={() => handleSort('barcode')}>Barcode</th>
              <th onClick={() => handleSort('city')}>City</th>
              <th onClick={() => handleSort('stock')}>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map(item => (
              <tr key={item.id} className={item.stock < 50 ? 'low-stock' : ''}>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.location}</td>
                <td>
                  <span className={`status-badge ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>{item.barcode}</td>
                <td>{item.city}</td>
                <td>{item.stock}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="summary-section">
        <div className="summary-card">
          <h3>Total Items</h3>
          <p>{inventory.length}</p>
        </div>
        <div className="summary-card">
          <h3>Low Stock Items</h3>
          <p>{inventory.filter(item => item.stock < 50).length}</p>
        </div>
        <div className="summary-card">
          <h3>Expiring Soon</h3>
          <p>{inventory.filter(item => item.location.includes('day') && parseInt(item.location) < 10).length}</p>
        </div>
        <div className="summary-card">
          <h3>Total Stock Value</h3>
          <p>₹{inventory.reduce((sum, item) => sum + item.stock, 0)}</p>
        </div>
      </div>
    </div>
    </>
  );
};




/*
//import React from "react";
//import axios from "axios";
//import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Inventory = () => {
  return (
    <>
    <div>
      <h1>Inventory</h1>
      <h2> Welcome to inventory Services page </h2>
       <button><Link to="/sales">Go to Sales</Link></button>
      <br></br>
     <button><Link to="/Logout">Logout</Link></button>
     </div>
    </>
  );
};

*/