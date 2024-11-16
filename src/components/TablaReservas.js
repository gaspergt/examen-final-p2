import React, { useState } from 'react';
import axios from 'axios';

const TablaReservas = ({ reservas, fetchReservas }) => {
    const [editingReserva, setEditingReserva] = useState(null);
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const cancelarReserva = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/reservas/${id}`);
            fetchReservas();
        } catch (error) {
            console.error('Error al cancelar la reserva', error);
        }
    };

    const handleEdit = (reserva) => {
        setEditingReserva(reserva.id);
        setFechaInicio(reserva.fechaInicio);
        setFechaFin(reserva.fechaFin);
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`http://localhost:8080/reservas/${id}`, {
                fechaInicio,
                fechaFin,
            });
            setEditingReserva(null);
            fetchReservas();
        } catch (error) {
            console.error('Error al actualizar la reserva', error);
        }
    };

    const handleCancelEdit = () => {
        setEditingReserva(null);
    };

    return (
        <div className="mt-4">
            <h3>Lista de Reservas</h3>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre Cliente</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                        <th>Tipo Habitación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((reserva) => (
                        <tr key={reserva.id}>
                            <td>{reserva.id}</td>
                            <td>{reserva.nombreCliente}</td>
                            <td>
                                {editingReserva === reserva.id ? (
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={fechaInicio}
                                        onChange={(e) => setFechaInicio(e.target.value)}
                                    />
                                ) : (
                                    reserva.fechaInicio
                                )}
                            </td>
                            <td>
                                {editingReserva === reserva.id ? (
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={fechaFin}
                                        onChange={(e) => setFechaFin(e.target.value)}
                                    />
                                ) : (
                                    reserva.fechaFin
                                )}
                            </td>
                            <td>{reserva.tipoHabitacion}</td>
                            <td>
                                {editingReserva === reserva.id ? (
                                    <>
                                        <button onClick={() => handleUpdate(reserva.id)} className="btn btn-success btn-sm me-2">Guardar</button>
                                        <button onClick={handleCancelEdit} className="btn btn-secondary btn-sm">Cancelar</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(reserva)} className="btn btn-warning btn-sm me-2">Editar</button>
                                        <button onClick={() => cancelarReserva(reserva.id)} className="btn btn-danger btn-sm">Cancelar</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaReservas;
