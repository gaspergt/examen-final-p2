import React, { useState } from 'react';
import axios from 'axios';

const FormularioReserva = ({ fetchReservas }) => {
    const [nombreCliente, setNombreCliente] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [tipoHabitacion, setTipoHabitacion] = useState('Sencilla');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/reservas', {
                nombreCliente,
                fechaInicio,
                fechaFin,
                tipoHabitacion,
            });
            fetchReservas();
            setNombreCliente('');
            setFechaInicio('');
            setFechaFin('');
            setTipoHabitacion('Sencilla');
        } catch (error) {
            console.error('Error al registrar la reserva', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 mb-4 border rounded">
            <h3 className="mb-3">Registrar Reserva</h3>
            <div className="mb-3">
                <label className="form-label">Nombre del Cliente:</label>
                <input
                    type="text"
                    className="form-control"
                    value={nombreCliente}
                    onChange={(e) => setNombreCliente(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha de Inicio:</label>
                <input
                    type="date"
                    className="form-control"
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha de Fin:</label>
                <input
                    type="date"
                    className="form-control"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Tipo de Habitación:</label>
                <select
                    className="form-select"
                    value={tipoHabitacion}
                    onChange={(e) => setTipoHabitacion(e.target.value)}
                >
                    <option value="Sencilla">Sencilla</option>
                    <option value="Doble">Doble</option>
                    <option value="Suite">Suite</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
    );
};

export default FormularioReserva;
