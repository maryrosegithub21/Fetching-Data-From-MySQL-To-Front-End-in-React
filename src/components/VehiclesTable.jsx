import React, { useEffect, useState } from 'react';

const VehiclesTable = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/vehicles');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                // Check if the response is JSON
                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new Error('Received non-JSON response');
                }

                const data = await response.json();
                setVehicles(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Test Case Number</th>
                        <th>Model / Year</th>
                        <th>Expected Output</th>
                        <th>Test Description</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{vehicle.Model}</td>
                            <td>{vehicle.Expected_Output}</td>
                            <td>{vehicle.Test_Description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VehiclesTable;