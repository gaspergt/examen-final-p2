import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioReserva from './components/FormularioReserva';
import TablaReservas from './components/TablaReservas';

const App = () => {
    const [reservas, setReservas] = useState([]);

    const fetchReservas = async () => {
        try {
            const response = await axios.get('http://localhost:8080/reservas');
            setReservas(response.data);
        } catch (error) {
            console.error('Error al obtener las reservas', error);
        }
    };

    useEffect(() => {
        fetchReservas();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Gestión de Reservas de Hotel</h1>
            <FormularioReserva fetchReservas={fetchReservas} />
            <TablaReservas reservas={reservas} fetchReservas={fetchReservas} />
        </div>
    );
};

export default App;
