package com.titanfight.titan_fight_app.api.dto;

import com.titanfight.titan_fight_app.api.entities.Professor;

public record ProfessorResponseDTO(
        Long id,
        String nome,
        String modalidadeNome,
        String grauNome,
        Integer status
) {
    public ProfessorResponseDTO(Professor prof) {
        this(
                prof.getId(),
                prof.getNome(),
                prof.getModalidade() != null ? prof.getModalidade().getNome() : "Sem Modalidade",
                prof.getGrau() != null ? prof.getGrau().getNome() : "Sem Grau",
                prof.getStatus()
        );
    }
}
