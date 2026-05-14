package com.titanfight.titan_fight_app.api.controller;

import com.titanfight.titan_fight_app.api.repository.ModalidadeRepository;
import com.titanfight.titan_fight_app.api.entities.Turma;
import com.titanfight.titan_fight_app.api.repository.TurmaRepository;
import com.titanfight.titan_fight_app.api.dto.TurmaRequestDTO;
import com.titanfight.titan_fight_app.api.dto.TurmaResponseDTO;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/turma")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TurmaController {

    @Autowired
    private TurmaRepository repository;

    @Autowired
    private ModalidadeRepository modalidadeRepository;

    @GetMapping
    public List<TurmaResponseDTO> getAll() {
        return repository.findAll().stream()
                .map(TurmaResponseDTO::new)
                .toList();
    }

    @PostMapping
    @Transactional
    public void saveTurma(@RequestBody TurmaRequestDTO data) {
        var modalidade = modalidadeRepository.findById(data.modalidadeId()).get();
        Turma turmaData = new Turma(data, modalidade);
        repository.save(turmaData);
    }

    @DeleteMapping("/{id}")
    public void deleteTurma(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @PutMapping("/{id}")
    @Transactional
    public TurmaResponseDTO atualizar(@PathVariable Long id, @RequestBody TurmaRequestDTO data) {
        var turma = repository.getReferenceById(id);
        var modalidade = modalidadeRepository.findById(data.modalidadeId()).get();

        turma.updateTurma(data, modalidade);
        return new TurmaResponseDTO(turma);
    }
}
