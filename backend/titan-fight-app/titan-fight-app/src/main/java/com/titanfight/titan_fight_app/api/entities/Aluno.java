package com.titanfight.titan_fight_app.api.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.titanfight.titan_fight_app.api.dto.AlunoRequestDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Table(name = "aluno")
@Entity(name = "aluno")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "AL_ID")
    private Long id;

    @Column(name ="AL_NOME")
    private String nome;

    @Column(name = "AL_DT_NASCIMENTO")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dt_nascimento;

    @Column(name = "AL_CPF", unique = true)
    private String cpf;

    @Column(name = "AL_TELEFONE")
    private String telefone;

    @Column(name = "AL_EMAIL")
    private String email;

    @Column(name = "AL_ESTADO")
    private String uf;

    @Column(name = "AL_CIDADE")
    private String cidade;

    @Column(name = "AL_STATUS")
    private Integer status;// 1- ativo 2- inativo 3-Pausado


    public Aluno(AlunoRequestDTO data) {
        this.id = data.id();
        this.nome = data.nome();
        this.dt_nascimento = data.dt_nascimento();
        this.cpf = data.cpf();
        this.telefone = data.telefone();
        this.email = data.email();
        this.uf = data.uf();
        this.cidade = data.cidade();
        this.status = (data.status() != null) ? data.status() : 1; // Default Ativo
    }

    public void updateAluno(AlunoRequestDTO data) {
        if(data.id() != null) this.id = data.id();
        if (data.nome() != null) this.nome = data.nome();
        if (data.dt_nascimento() != null) this.dt_nascimento = data.dt_nascimento();
        if (data.cpf() != null) this.cpf = data.cpf();
        if (data.telefone() != null) this.telefone = data.telefone();
        if (data.email() != null) this.email = data.email();
        if (data.uf() != null) this.uf = data.uf();
        if (data.cidade() != null) this.cidade = data.cidade();
        if (data.status() != null) this.status = data.status();
    }


}
