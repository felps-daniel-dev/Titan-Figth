package com.titanfight.titan_fight_app.api.dto;

import com.titanfight.titan_fight_app.api.entities.Turma;

public record TurmaResponseDTO(
        Long id,
        String nome,
        String horario,
        String diasSemana,
        String modalidadeNome
) {
    public TurmaResponseDTO(Turma turma) {
        this(
                turma.getId(),
                turma.getNome(),
                turma.getHorario(),
                turma.getDiasSemana(),
                turma.getModalidade().getNome()
        );
    }
}
