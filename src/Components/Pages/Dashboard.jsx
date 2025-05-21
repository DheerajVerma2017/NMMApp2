import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as XLSX from 'xlsx';
import './Dashboard.css';

export const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date(new Date().setMonth(new Date().getMonth() - 11)));
  const [endDate, setEndDate] = useState(new Date());
  const [hoveredBar, setHoveredBar] = useState(null);
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - in real app you would fetch from your API
        const months = [
          'April', 'May', 'June', 'July', 'August', 'September',
          'October', 'November', 'December', 'January', 'February', 'March'
        ];
        
        const mockData = months.map((month, index) => ({
          month,
          value: 700000 - (index * 50000),
          sales: Math.floor(Math.random() * 200000) + 300000,
          purchases: Math.floor(Math.random() * 150000) + 200000
        }));
        
        setChartData(mockData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [startDate, endDate]); // Re-fetch when dates change

  // Export to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(chartData.map(item => ({
      Month: item.month,
      Sales: item.sales,
      Purchases: item.purchases,
      Total: item.value
    })));
    
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "PurchaseSalesData");
    XLSX.writeFile(wb, "PurchaseSalesReport.xlsx");
  };

  // Calculate max value for chart scaling
  const maxValue = Math.max(...chartData.map(item => Math.max(item.value, item.sales, item.purchases)));

  return (
    <>
    <div className="dashboard-container">
      {/* Company Details Section */}
      <div className="company-section">
        <h3 className="dashboard-title">Company Details</h3>
        <div className="invoice-info">
          <h4>Invoice: 3345 | Nolda </h4>
          <p>I-4 Sector22</p>
          <p><strong>Uttar Pradesh</strong></p>
        </div>
      </div>

      <hr className="dashboard-divider" />

      {/* Online Store Section */}
      <div className="online-store-section">
        <h2>Store Sales Dashboard</h2>
        <div className="store-metrics">
          <div className="metric-card">
            <strong>Sales</strong>
            <span>19242</span>
          </div>
          <div className="metric-card">
            <strong>Cash</strong>
            <span>5373</span>
          </div>
          <div className="metric-card">
            <strong>Card</strong>
            <span>1580</span>
          </div>
          <div className="metric-card">
            <strong>UPI</strong>
            <span>11289</span>
          </div>
          <div className="metric-card">
            <strong>Pending Received</strong>
            <span>0</span>
          </div>
          <div className="metric-card">
            <strong>Total Payable</strong>
            <span>0</span>
          </div>
          <div className="metric-card">
            <strong>Total Receivable</strong>
            <span className="positive">+10082</span>
          </div>
           {/* <div className="metric-card">
            <strong>Today Expense</strong>
            <span>0</span>
          </div> */}
        </div>
        {/* <div className="store-summary">
          <p><strong>Total Purch: 0 | Hold Sale: 0 | Add Expense</strong></p>
        </div>  */}
      </div>

      {/* <hr className="dashboard-divider" /> */}

      {/* Total Expenses Section */}
      {/* <div className="expenses-section">
        <h2>Total Expenses</h2>
        <div className="expenses-list">
          <div className="expense-item">
            <span>Carriage</span>
            <span>0</span>
          </div>
          <div className="expense-item">
            <span>Counter</span>
            <span>0</span>
          </div>
          <div className="expense-item">
            <span>Labour</span>
            <span>0</span>
          </div>
          <div className="expense-item">
            <span>Packaging</span>
            <span>0</span>
          </div>
        </div>
      </div> */}

      <hr className="dashboard-divider" />

      {/* Purchase-Sales Chart Section */}
      {/* <div className="sales-section">
        <h2>Purchase - Sales</h2>
        {/* <div className="sales-chart">
          {/* <div className="chart-values">
            {[700000, 650000, 600000, 550000, 500000, 450000, 400000, 350000, 
              300000, 250000, 200000, 150000, 100000, 50000].map((value, index) => (
              <div key={index} className="chart-value">
                {value.toLocaleString()}
              </div> */}
            {/* ))} */}
          {/* </div> */}
          {/* <div className="chart-legends">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="chart-legend">
                <span>Legend</span>
              </div>
            ))}
          </div> */}
        {/* </div> */} 
      {/* </div> */} 

      <hr className="dashboard-divider" />

      {/* Buying Stock Items Section */}
      <div className="stock-section">
        <h2>Buying Stock Items</h2>
        <table className="stock-table">
          <thead>
            <tr>
              <th>Low Stock Items</th>
              <th>Guy</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: 'ST TRACK SUITS', value: 10 },
              { item: 'COURDUROY JACKETS', value: 1 },
              { item: 'WRANGLER JACKETS', value: 6 },
              { item: 'LU - Track Suits', value: 1 },
              { item: 'T-Shirt Sale 199', value: -30 },
              { item: 'T-SHIRT SALE 149', value: -10 },
              { item: 'ST UPPER COLUM', value: -8 }
            ].map((row, index) => (
              <tr key={index}>
                <td>{row.item}</td>
                <td className={row.value < 0 ? 'negative' : ''}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="dashboard-divider" />

      {/* Detailed View Section */}
      {/* <div className="detailed-view-section">
        <h2>Detailed View</h2>
        <button className="excel-report-btn">Excel Report</button>
      </div> */}
    </div>
    <div className="dashboard-container">
      <h1 className="dashboard-title">Purchase - Sales Dashboard</h1>
      
      {/* Date Range Selectors */}
      <h2 className="date-range-title">Select Date Range</h2>
      <div className="date-range-selector">
        <div className="date-picker-group">
          <label>From:</label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            maxDate={endDate}
            dateFormat="MMM yyyy"
            showMonthYearPicker
          />
        </div>
        <div className="date-picker-group">
          <label>To:</label>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            maxDate={new Date()}
            dateFormat="MMM yyyy"
            showMonthYearPicker
          />
        </div>
        <button className="excel-btn" onClick={exportToExcel}>
          Export to Excel
        </button>
      </div>
      
      {/* Chart Section */}
      <div className="chart-section">
        <h2>Purchase - Sales Analysis</h2>
        {loading ? (
          <div className="chart-loading">
            <div className="spinner"></div>
            <p>Loading chart data...</p>
          </div>
        ) : (
          <>
            <div className="chart-container">
              <div className="chart-bars">
                {chartData.map((item, index) => (
                  <div key={index} className="chart-bar-group">
                    <div 
                      className="chart-bar sales-bar"
                      style={{ height: `${(item.sales / maxValue) * 100}%` }}
                      onMouseEnter={() => setHoveredBar({ type: 'sales', ...item })}
                      onMouseLeave={() => setHoveredBar(null)}
                    ></div>
                    <div 
                      className="chart-bar purchases-bar"
                      style={{ height: `${(item.purchases / maxValue) * 100}%` }}
                      onMouseEnter={() => setHoveredBar({ type: 'purchases', ...item })}
                      onMouseLeave={() => setHoveredBar(null)}
                    ></div>
                    <div className="chart-month">{item.month}</div>
                  </div>
                ))}
              </div>
              <div className="chart-y-axis">
                {[ 0 , 100000, 200000, 300000, 400000, 500000, 600000, 700000].map((value) => (
                  <div key={value} className="y-axis-label">{value.toLocaleString()}</div>
                ))}
              </div>
            </div>
            
            {/* Tooltip */}
            {hoveredBar && (
              <div 
                className="chart-tooltip"
                style={{
                  left: `${hoveredBar.index * (100 / chartData.length) + (50 / chartData.length)}%`
                }}
              >
                <strong>{hoveredBar.month}</strong>
                <div>{hoveredBar.type === 'sales' ? 'Sales' : 'Purchases'}: {hoveredBar[hoveredBar.type].toLocaleString()}</div>
                <div>Total: {hoveredBar.value.toLocaleString()}</div>
              </div>
            )}
            
            {/* Legend */}
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-color sales-legend"></div>
                <span>Sales</span>
              </div>
              <div className="legend-item">
                <div className="legend-color purchases-legend"></div>
                <span>Purchases</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    <div className="dashboard-buttons">
      <button className="dashboard-button" onClick={() => navigate('/company')}>Go to Company</button>
      <button className="dashboard-button" onClick={() => navigate('/login')}>Go to Login</button>
    </div>
  </>
  );
};

//export default DashboardPage;