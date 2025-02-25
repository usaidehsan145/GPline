// src/components/dashboard/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Sidebar.css'; // Ensure to import the CSS file
import { IoHomeOutline, IoChatbubblesOutline, IoPersonOutline, IoCalendarOutline, IoAnalyticsOutline, IoLogOutOutline, IoDocumentTextOutline } from 'react-icons/io5';

const Sidebar = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h3 className="text-black">General</h3>
                <Link to="/dashboard">
                    <button 
                        className={`sidebar-button ${activeButton === 'dashboard' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('dashboard')}
                    >
                        <IoHomeOutline className="sidebar-icon" /> <span className="text-black">Dashboard</span>
                    </button>
                </Link>
                <Link to="/meeting-history">
                    <button 
                        className={`sidebar-button ${activeButton === 'meetingHistory' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('meetingHistory')}
                    >
                        <IoDocumentTextOutline className="sidebar-icon" /> <span className="text-black">Meeting History</span>
                    </button>
                </Link>
                <Link to="/doctors-management">
                    <button 
                        className={`sidebar-button ${activeButton === 'patientManagement' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('patientManagement')}
                    >
                        <IoPersonOutline className="sidebar-icon" /> <span className="text-black">Doctors Management</span>
                    </button>
                </Link>
                <Link to="/consultation">
                    <button 
                        className={`sidebar-button ${activeButton === 'consultation' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('consultation')}
                    >
                        <IoChatbubblesOutline className="sidebar-icon" /> <span className="text-black">Consultation</span>
                    </button>
                </Link>
                <Link to="/appointments/dashboard">
                    <button 
                        className={`sidebar-button ${activeButton === 'appointments' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('appointments')}
                    >
                        <IoCalendarOutline className="sidebar-icon" /> <span className="text-black">Appointments</span>
                    </button>
                </Link>
                <Link to="/analysis">
                    <button 
                        className={`sidebar-button ${activeButton === 'analysis' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('analysis')}
                    >
                        <IoAnalyticsOutline className="sidebar-icon" /> <span className="text-black">Analysis</span>
                    </button>
                </Link>
                <Link to="/activity-logs">
                    <button 
                        className={`sidebar-button ${activeButton === 'activityLogs' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('activityLogs')}
                    >
                        <IoLogOutOutline className="sidebar-icon" /> <span className="text-black">Activity Logs</span>
                    </button>
                </Link>
            </div>
            <div className="sidebar-section">
                <h3 className="text-black">Communication</h3>
                <Link to="/messages">
                    <button 
                        className={`sidebar-button ${activeButton === 'messages' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('messages')}
                    >
                        <IoChatbubblesOutline className="sidebar-icon" /> <span className="text-black">Messages</span>
                    </button>
                </Link>
                <Link to="/calls">
                    <button 
                        className={`sidebar-button ${activeButton === 'calls' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('calls')}
                    >
                        <IoPersonOutline className="sidebar-icon" /> <span className="text-black">Calls</span>
                    </button>
                </Link>
            </div>
            <div className="sidebar-section">
                <h3 className="text-black">Automated Tracking System</h3>
                <Link to="/doctors-activity">
                    <button 
                        className={`sidebar-button ${activeButton === 'doctorsActivity' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('doctorsActivity')}
                    >
                        <IoAnalyticsOutline className="sidebar-icon" /> <span className="text-black">Doctors Activity</span>
                    </button>
                </Link>
                <Link to="/appointment-logging">
                    <button 
                        className={`sidebar-button ${activeButton === 'appointmentLogging' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('appointmentLogging')}
                    >
                        <IoCalendarOutline className="sidebar-icon" /> <span className="text-black">Appointment Logging</span>
                    </button>
                </Link>
                <Link to="/payment-calculation">
                    <button 
                        className={`sidebar-button ${activeButton === 'paymentCalculation' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('paymentCalculation')}
                    >
                        <IoHomeOutline className="sidebar-icon" /> <span className="text-black">Payment & Calculation</span>
                    </button>
                </Link>
                <Link to="/audit-reconciliation">
                    <button 
                        className={`sidebar-button ${activeButton === 'auditReconciliation' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('auditReconciliation')}
                    >
                        <IoDocumentTextOutline className="sidebar-icon" /> <span className="text-black">Audit & Reconciliation</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
