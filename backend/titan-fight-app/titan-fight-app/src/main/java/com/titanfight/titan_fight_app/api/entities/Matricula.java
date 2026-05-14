package com.titanfight.titan_fight_app.api.entities;

import com.titanfight.titan_fight_app.api.dto.MatriculaRequestDTO;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Table(name = "tb_matricula")
@Entity(name = "matricula")
@Getter
@Setter
@NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Matricula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MAT_ID")
    private Long id;

    @OneToOne // Geralmente um aluno tem uma matrícula ativa por vez
    @JoinColumn(name = "AL_ID_FK")
    private Aluno aluno;

    @Column(name = "MAT_DATA_INICIO")
    private LocalDate dataInicio;

    @Column(name = "MAT_STATUS")
    private Integer status; // 1: Ativa, 0: Cancelada, 2: Trancada

    @Column(name = "MAT_OBSERVACOES")
    private String observacoes;

    public Matricula(MatriculaRequestDTO data, Aluno aluno) {
        this.aluno = aluno;
        this.dataInicio = (data.dataInicio() != null) ? data.dataInicio() : LocalDate.now();
        this.status = (data.status() != null) ? data.status() : 1;
        this.observacoes = data.observacoes();
    }

    public void updateMatricula(MatriculaRequestDTO data, Aluno aluno) {
        this.aluno = aluno;
        if (data.dataInicio() != null) this.dataInicio = data.dataInicio();
        if (data.status() != null) this.status = data.status();
        if (data.observacoes() != null) this.observacoes = data.observacoes();
    }
}
