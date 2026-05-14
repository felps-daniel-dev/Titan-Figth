package com.titanfight.titan_fight_app.api.dto;

import java.time.LocalDate;

public record AlunoRequestDTO (Long id,
                               String nome,
                               LocalDate dt_nascimento,
                               String cpf,
                               String telefone,
                               String email,
                               String uf,
                               String cidade,
                               Integer status ){
}
