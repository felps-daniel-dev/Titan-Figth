package com.titanfight.titan_fight_app.api.entities;

import com.titanfight.titan_fight_app.api.dto.ProfessorRequestDTO;
import jakarta.persistence.*;
import lombok.*;

@Table(name = "professor")
@Entity(name = "professor")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Professor {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "PRO_ID")
        private Long id;

        @Column(name = "PRO_NOME", nullable = false)
        private String nome;

        @Column(name = "PRO_CPF", unique = true)
        private String cpf;

        @Column(name = "PRO_TELEFONE")
        private String telefone;

        @Column(name = "PRO_STATUS")
        private Integer status;

        @ManyToOne
        @JoinColumn(name = "MOD_ID_FK")
        private Modalidade modalidade;

        @ManyToOne
        @JoinColumn(name = "GR_ID_FK")
        private Grau grau;


        public Professor(ProfessorRequestDTO data, Modalidade modalidade, Grau grau) {
            this.id = data.id();
            this.nome = data.nome();
            this.cpf = data.cpf();
            this.telefone = data.telefone();
            this.status = (data.status() != null) ? data.status() : 1;
            this.modalidade = modalidade;
            this.grau = grau;
        }

    public void updateProfessor(ProfessorRequestDTO data, Modalidade modalidade, Grau grau) {
        if (data.nome() != null) this.nome = data.nome();
        if (data.cpf() != null) this.cpf = data.cpf();
        if (data.telefone() != null) this.telefone = data.telefone();
        if (data.status() != null) this.status = data.status();

        this.modalidade = modalidade;
        this.grau = grau;
    }
}
