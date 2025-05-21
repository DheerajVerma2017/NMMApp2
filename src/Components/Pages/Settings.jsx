// Settings.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Settings.css"; // Import the CSS file

export const Settings = () => {
  const settingsData = [
  { label: "Allow Duplicate Items in Inventory", type: "select" },
  { label: "Allow Credit Note in Sales", type: "select" },
  { label: "Allow Out of Book Sales", type: "select" },
  { label: "Gross Total", type: "select" },
  { label: "Gross G.T. addons", type: "select" },
  { label: "Manufacturing", type: "select" },
  { label: "HSN Invoice Number with Delivery Note", type: "select" },
  { label: "Hide Customer Name", type: "select" },
  { label: "Fill Category (on Summary)", type: "select" },
  { label: "Invoice Page Size", type: "select" },
  { label: "Invoice Print Option", type: "input" },
  { label: "Invoice Print Paper (A4/ POS)", type: "select" },
  { label: "Invoice Print Paper (B2B)", type: "select" },
  { label: "Invoice Print Paper (B2C)", type: "select" },
  { label: "Invoice Print Paper (EXP)", type: "select" },
  { label: "Merge Invoice Copies", type: "select" },
  { label: "Merge Invoice Customers", type: "select" },
  { label: "Send Invoice Email", type: "select" },
  { label: "Send Invoice Format", type: "select" },
  { label: "Show Brand", type: "select" },
  { label: "Show Item Color", type: "select" },
  { label: "Show Item Category", type: "select" },
  { label: "Show Item Description", type: "select" },
  { label: "Show Item MRP", type: "select" },
  { label: "Show Item Rate", type: "select" },
  { label: "Show Item Size", type: "select" },
  { label: "Show Item Taxable Amount", type: "select" },
  { label: "Show Item Tax %", type: "select" },
  { label: "Show Item Total", type: "select" },
  { label: "Show Item UQC", type: "select" },
  { label: "Show TTime Barcode", type: "select" },
];


  const SettingRow = ({ label, type }) => (
    <div className="setting-row">
      <label className="setting-label">{label}</label>
      {type === "select" ? (
        <select className="setting-select">
          <option>Yes</option>
          <option>No</option>
        </select>
      ) : (
        <input
          type="text"
          className="setting-input"
          placeholder="Enter value"
        />
      )}
    </div>
  );

  return (
    <div className="settings-container">
      <h1 className="settings-title">GST Settings</h1>
      <div className="settings-grid">
        {settingsData.map((setting, index) => (
          <SettingRow key={index} {...setting} />
        ))}
      </div>
      <div className="settings-buttons">
        <button className="settings-button">
          <Link to="/company">Go to Company</Link>
        </button>
        <button className="settings-button">
          <Link to="/Login">Go to Login</Link>
        </button>
      </div>
    </div>
  );
};