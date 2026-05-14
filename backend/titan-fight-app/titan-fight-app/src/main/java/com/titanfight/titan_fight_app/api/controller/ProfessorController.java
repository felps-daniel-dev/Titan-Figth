package com.titanfight.titan_fight_app.api.controller;


import com.titanfight.titan_fight_app.api.repository.GrauRepository;
import com.titanfight.titan_fight_app.api.repository.ModalidadeRepository;
import com.titanfight.titan_fight_app.api.entities.Professor;
import com.titanfight.titan_fight_app.api.repository.ProfessorRepository;
import com.titanfight.titan_fight_app.api.dto.ProfessorRequestDTO;
import com.titanfight.titan_fight_app.api.dto.ProfessorResponseDTO;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/professor")
public class ProfessorController {

    @Autowired
    private ProfessorRepository repository;

    @Autowired
    private ModalidadeRepository modalidadeRepository;

    @Autowired
    private GrauRepository grauRepository;

    @GetMapping
    public List<ProfessorResponseDTO> getAll() {
        return repository.findAll().stream()
                .map(ProfessorResponseDTO::new)
                .toList();
    }

    @PostMapping
    @Transactional
    public void saveProfessor(@RequestBody ProfessorRequestDTO data) {
        // Busca direta sem tratamento de erro (vai retornar null ou erro de banco se não existir)
        var modalidade = modalidadeRepository.findById(data.modalidadeId()).get();
        var grau = grauRepository.findById(data.grauId()).get();

        Professor professorData = new Professor(data, modalidade, grau);
        repository.save(professorData);
    }

    @DeleteMapping("/{id}")
    public void deleteProfessor(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @PutMapping("/{id}")
    @Transactional
    public ProfessorResponseDTO atualizar(@PathVariable Long id, @RequestBody ProfessorRequestDTO data) {
        var professor = repository.getReferenceById(id);

        // Busca as referências diretas
        var modalidade = modalidadeRepository.findById(data.modalidadeId()).get();
        var grau = grauRepository.findById(data.grauId()).get();

        professor.updateProfessor(data, modalidade, grau);

        return new ProfessorResponseDTO(professor);
    }
}

