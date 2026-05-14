package com.titanfight.titan_fight_app.api.entities;

import com.titanfight.titan_fight_app.api.dto.ModalidadeRequestDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "modalidade")
@Entity(name = "modalidade")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Modalidade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MOD_ID")
    private Long id;

    @Column(name =  "MOD_NOME")
    private String nome;

    @Column(name = "MOD_VL_MENSAL")
    private Double vl_mensal;

    @Column(name = "MOD_VL_TRIMESTRAL")
    private Double vl_trimestral;

    @Column(name = "MOD_VL_SEMESTRAL")
    private Double vl_semestral;

    @Column(name = "MOD_VL_ANUAL")
    private Double vl_anual;

    public Modalidade(ModalidadeRequestDTO data){
        this.nome          = data.nome();
        this.vl_mensal     = data.vl_mensal();
        this.vl_trimestral = data.vl_trimestral();
        this.vl_semestral  = data.vl_semestral();
        this.vl_anual      = data.vl_anual();
    }

    public void updateModalidade(ModalidadeRequestDTO data) {
        if (data.nome() != null) {
            this.nome = data.nome();
        }
        if (data.vl_mensal() != null) {
            this.vl_mensal = data.vl_mensal();
        }
        if (data.vl_trimestral() != null) {
            this.vl_trimestral = data.vl_trimestral();
        }
        if (data.vl_semestral() != null) {
            this.vl_semestral = data.vl_semestral();
        }
        if (data.vl_anual() != null) {
            this.vl_anual = data.vl_anual();
        }


    }
}
