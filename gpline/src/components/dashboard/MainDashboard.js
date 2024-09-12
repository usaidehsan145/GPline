// src/components/dashboard/MainDashboard.js
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom'; // Updated import
import StatsBox from "./StatsBox";
import PatientStats from "./PatientStats";
import TopDoctors from "./TopDoctors";
import Calendar from "react-calendar";
import "./MainDashboard.css";
import 'react-calendar/dist/Calendar.css';

const MainDashboard = ({ name, statsData, patientStatsData, topDoctorsData }) => {
    const navigate = useNavigate(); // Use useNavigate for navigation

    const handleButtonClick = (destination) => {
        navigate(`/${destination}`);
    };

    // Define state for Calendar component
    const [date, setDate] = React.useState(new Date());

    return (
        <div className="main-dashboard">
            <div className="welcome-container">
                <h1 className="welcome-heading">Welcome,</h1>
                <h1 className="welcome-name">{name}</h1>
            </div>
            <p className="welcome-msg">Manage patients and doctor information here.</p>
            <div className="stats-boxes">
                {statsData.map((item, index) => (
                    <StatsBox
                        key={index}
                        color={item.color}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        count={item.count}
                    />
                ))}
            </div>
            <div className="dashboard-content">
                <PatientStats data={patientStatsData} />
                <TopDoctors doctors={topDoctorsData} />
            </div>
            <div className="dashboard-row">
                <div className="dashboard-buttons">
                    <button
                        className="dashboard-button"
                        onClick={() => handleButtonClick('key-metrics')}
                    >
                        <h4>Key Metrics Summary</h4>
                        <p>Tracks important appointment data, such as schedule rates, wait times, and no-shows.</p>
                    </button>
                    <button
                        className="dashboard-button"
                        onClick={() => handleButtonClick('recent-activities')}
                    >
                        <h4>Recent activities:</h4>
                        <p>View latest appointment changes, cancellations, and updates.</p>
                    </button>
                    <button
                        className="dashboard-button"
                        onClick={() => handleButtonClick('system-stats')}
                    >
                        <h4>System Statics</h4>
                        <p>Provides insights into appointment trends, patient demographics, and system performance.</p>
                    </button>
                </div>
                <div className="calendar-container">
                    <Calendar onChange={setDate} value={date} className="dashboard-calendar" />
                </div>
            </div>
        </div>
    );
};

MainDashboard.propTypes = {
    name: PropTypes.string.isRequired,
    statsData: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        })
    ).isRequired,
    patientStatsData: PropTypes.object.isRequired,
    topDoctorsData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string,
            specialization: PropTypes.string.isRequired,
            reviews: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default MainDashboard;
