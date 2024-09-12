// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/dashboard/Header';
import Sidebar from './components/dashboard/Sidebar';
import MainDashboard from './components/dashboard/MainDashboard';
import KeyMetrics from './components/dashboard/KeyMetrics';
import RecentActivities from './components/dashboard/RecentActivities';
import SystemStats from './components/dashboard/SystemStats';
import DoctorsComponent from './components/doctormanagement/DoctorsComponent';
import DoctorDetails from './components/doctormanagement/DoctorDetails';
import BillingComponent from './components/billing/BillingComponent';
import AppointmentComp from './components/appointment/AppointmentComp';
import DashboardComp from './components/appointment/DashboardComp'; // Import all section components
import SchedulingComp from './components/appointment/SchedulingComp';
import ManagementComp from './components/appointment/ManagementComp';
import ReportComp from './components/appointment/ReportComp';
import SettingComp from './components/appointment/SettingComp';
import './App.css';

const App = () => {
    const name = "Alex Robert";
    const statsData = [
        { color: "#B7C8FF", imageSrc: require('./assets/Stethoscope.png'), title: "Total Doctors", count: 20 },
        { color: "#BCEAFE", imageSrc: require('./assets/User Plus.png'), title: "Total Patients", count: 150 },
        { color: "#C4E5B0", imageSrc: require('./assets/Calendar.png'), title: "Total Appointments", count: 75 },
        { color: "#F4C8FF", imageSrc: require('./assets/Money Bag.png'), title: "Total Earnings", count: "$12,000" }
    ];

    const patientStatsData = {
        week: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
            values: [50, 75, 100, 120, 150, 130, 250, 300, 350, 400, 350, 500]
        },
        month: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            values: [200, 300, 400, 600, 500, 700, 800, 900, 1000, 950, 1200, 1300]
        },
        year: {
            labels: ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
            values: [1500, 1800, 2500, 2700, 3200, 3000, 3500, 4200, 3900, 2200]
        }
    };

    const topDoctorsData = [
        { name: "Dr. Olivia Green", image: null, specialization: "Neurologist", reviews: 115 },
        { name: "Dr. Liam Wilson", image: null, specialization: "Cardiologist", reviews: 89 },
        { name: "Dr. Ava Martinez", image: null, specialization: "Pediatrician", reviews: 97 },
        { name: "Dr. Noah Clark", image: null, specialization: "Dermatologist", reviews: 82 },
        { name: "Dr. Sophia Lee", image: null, specialization: "Oncologist", reviews: 130 },
        { name: "Dr. James Harris", image: null, specialization: "Orthopedic Surgeon", reviews: 75 },
        { name: "Dr. Isabella Adams", image: null, specialization: "Ophthalmologist", reviews: 104 },
        { name: "Dr. Ethan Baker", image: null, specialization: "Endocrinologist", reviews: 88 }
    ];

    return (
        <Router>
            <div className="app-container">
                <Header name={name} />
                <div className="main-content">
                    <Sidebar />
                    <div className="content-area">
                        <Routes>
                            <Route path="/" element={<MainDashboard
                                name={name}
                                statsData={statsData}
                                patientStatsData={patientStatsData}
                                topDoctorsData={topDoctorsData}
                            />} />
                            <Route path="/dashboard" element={<MainDashboard
                                name={name}
                                statsData={statsData}
                                patientStatsData={patientStatsData}
                                topDoctorsData={topDoctorsData}
                            />} />
                            <Route path="/key-metrics" element={<KeyMetrics
                                totalPatients="150"
                                totalDoctors="20"
                                totalConsultations="75"
                            />} />
                            <Route path="/recent-activities" element={<RecentActivities />} />
                            <Route path="/system-stats" element={<SystemStats />} />
                            <Route path="/doctors-management" element={<DoctorsComponent />} />
                            <Route path="/doctor-details" element={<DoctorDetails />} />
                            <Route path="/payment-calculation" element={<BillingComponent />} />
                            <Route path="/appointments" element={<AppointmentComp />}>

                                {/* Nested routes for AppointmentComp */}
                                <Route path="dashboard" element={<DashboardComp />} />
                                <Route path="scheduling" element={<SchedulingComp />} />
                                <Route path="management" element={<ManagementComp />} />
                                <Route path="report" element={<ReportComp />} />
                                <Route path="setting" element={<SettingComp />} />

                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
