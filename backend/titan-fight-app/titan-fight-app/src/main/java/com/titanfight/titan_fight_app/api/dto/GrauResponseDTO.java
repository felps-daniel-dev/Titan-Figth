package com.titanfight.titan_fight_app.api.dto;

import com.titanfight.titan_fight_app.api.entities.Grau;

public record GrauResponseDTO(Long id, String nome, String cor) {

    public GrauResponseDTO(Grau grau){
        this(grau.getId(), grau.getNome(), grau.getCor());
    }
}
