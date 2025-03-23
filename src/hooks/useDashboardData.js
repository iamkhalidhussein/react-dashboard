import axios from 'axios';
import { useState } from 'react';

const useDashboardData = () => {
    const [dashboardData, setDashboardData] = useState([]);
    const [loading, setLoading] = useState(false);

    // console.log('loading', loading);
    const backendUrl = 'https://react-dashboard-backend-six.vercel.app';
    
    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await axios.get(`${backendUrl}/dashboard`)
            setDashboardData(data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    
    return { fetchData, dashboardData, loading };
};

export default useDashboardData;