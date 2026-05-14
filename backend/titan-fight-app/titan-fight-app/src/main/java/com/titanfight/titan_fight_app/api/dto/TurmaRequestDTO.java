package com.titanfight.titan_fight_app.api.dto;

public record TurmaRequestDTO(
        String nome,
        String horario,
        String diasSemana,
        Long modalidadeId
) {

}
