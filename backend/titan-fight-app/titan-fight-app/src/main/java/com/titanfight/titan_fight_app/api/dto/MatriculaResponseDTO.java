package com.titanfight.titan_fight_app.api.dto;

import com.titanfight.titan_fight_app.api.entities.Matricula;

import java.time.LocalDate;

public record MatriculaResponseDTO(
        Long id,
        String alunoNome,
        LocalDate dataInicio,
        Integer status
) {
    public MatriculaResponseDTO(Matricula matricula) {
        this(
                matricula.getId(),
                matricula.getAluno().getNome(),
                matricula.getDataInicio(),
                matricula.getStatus()
        );
    }
}
