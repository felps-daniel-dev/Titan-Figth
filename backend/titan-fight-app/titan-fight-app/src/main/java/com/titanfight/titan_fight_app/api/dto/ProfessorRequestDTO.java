package com.titanfight.titan_fight_app.api.dto;

public record ProfessorRequestDTO(
        Long id,
        String nome,
        String cpf,
        String telefone,
        Integer status,
        Long modalidadeId,
        Long grauId
) {

}