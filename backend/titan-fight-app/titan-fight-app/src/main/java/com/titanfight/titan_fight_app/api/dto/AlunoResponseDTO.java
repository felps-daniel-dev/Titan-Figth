package com.titanfight.titan_fight_app.api.dto;

import com.titanfight.titan_fight_app.api.entities.Aluno;

import java.time.LocalDate;

public record AlunoResponseDTO(Long id,
                               String nome,
                               LocalDate dt_nascimento,
                               String cpf,
                               String telefone,
                               String email,
                               String uf,
                               String cidade,
                               Integer status) {

    public AlunoResponseDTO(Aluno aluno) {
        this(
                aluno.getId(),
                aluno.getNome(),
                aluno.getDt_nascimento(),
                aluno.getCpf(),
                aluno.getTelefone(),
                aluno.getEmail(),
                aluno.getUf(),
                aluno.getCidade(),
                aluno.getStatus()
        );
    }
}
