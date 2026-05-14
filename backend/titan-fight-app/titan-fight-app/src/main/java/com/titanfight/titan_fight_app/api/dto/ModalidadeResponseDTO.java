package com.titanfight.titan_fight_app.api.dto;

import com.titanfight.titan_fight_app.api.entities.Modalidade;

public record ModalidadeResponseDTO(Long id, String nome, Double vl_mensal, Double vl_trimestral,
                                    Double vl_semestral, Double vl_anual) {

    public ModalidadeResponseDTO(Modalidade mod){
        this(mod.getId(), mod.getNome(), mod.getVl_mensal(), mod.getVl_trimestral(),
                mod.getVl_semestral(), mod.getVl_anual());
    }
}
