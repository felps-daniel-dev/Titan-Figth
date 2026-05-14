package com.titanfight.titan_fight_app.api.dto;

import java.time.LocalDate;

public record MatriculaRequestDTO(
        Long alunoId,
        LocalDate dataInicio,
        Integer status,
        String observacoes
) {}
