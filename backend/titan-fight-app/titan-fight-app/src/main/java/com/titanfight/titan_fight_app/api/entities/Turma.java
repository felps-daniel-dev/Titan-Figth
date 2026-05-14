package com.titanfight.titan_fight_app.api.entities;

import com.titanfight.titan_fight_app.api.dto.TurmaRequestDTO;
import jakarta.persistence.*;
import lombok.*;

@Table(name = "turma")
@Entity(name = "turma")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Turma {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TUR_ID")
    private Long id;

    @Column(name = "TUR_NOME")
    private String nome;

    @Column(name = "TUR_HORARIO")
    private String horario;

    @Column(name = "TUR_DIAS_SEMANA")
    private String diasSemana;

    @Column(name = "TUR_CAPACIDADE")
    private Integer capacidade;

    @ManyToOne
    @JoinColumn(name = "MOD_ID_FK")
    private Modalidade modalidade;

    public Turma(TurmaRequestDTO data, Modalidade modalidade) {
        this.nome = data.nome();
        this.horario = data.horario();
        this.diasSemana = data.diasSemana();
        this.modalidade = modalidade;
    }

    public void updateTurma(TurmaRequestDTO data, Modalidade modalidade) {
        if (data.nome() != null) this.nome = data.nome();
        if (data.horario() != null) this.horario = data.horario();
        if (data.diasSemana() != null) this.diasSemana = data.diasSemana();
        this.modalidade = modalidade;
    }
}