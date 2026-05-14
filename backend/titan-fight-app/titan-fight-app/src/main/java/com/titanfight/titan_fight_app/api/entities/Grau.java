package com.titanfight.titan_fight_app.api.entities;

import com.titanfight.titan_fight_app.api.dto.GrauRequestDTO;
import jakarta.persistence.*;
import lombok.*;

@Table(name = "grau")
@Entity(name = "grau")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Grau {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "GR_ID")
    private Long id;

    @Column(name = "GR_NOME")
    private String nome;

    @Column(name = "GR_COR")
    private String cor;

    public Grau(GrauRequestDTO data){
        this.nome = data.nome();
        this.cor  = data.cor();
    }


    public void updateGrau(GrauRequestDTO data) {
        if (data.nome() != null) {
            this.nome = data.nome();
        }
        if (data.cor() != null) {
            this.cor = data.cor();
        }
    }

}
