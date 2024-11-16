package com.hotelreservas.controller;

import com.hotelreservas.model.Reserva;
import com.hotelreservas.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservas")
public class ReservaController {

    @Autowired
    private ReservaRepository reservaRepository;

    @PostMapping
    public Reserva registrarReserva(@RequestBody Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    @GetMapping
    public List<Reserva> listarReservas() {
        return reservaRepository.findAll();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reserva> actualizarReserva(@PathVariable Long id, @RequestBody Reserva reservaDetalles) {
        return reservaRepository.findById(id).map(reserva -> {
            reserva.setFechaInicio(reservaDetalles.getFechaInicio());
            reserva.setFechaFin(reservaDetalles.getFechaFin());
            return ResponseEntity.ok(reservaRepository.save(reserva));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> cancelarReserva(@PathVariable Long id) {
        return reservaRepository.findById(id).map(reserva -> {
            reservaRepository.delete(reserva);
            return ResponseEntity.ok().<Void>build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
