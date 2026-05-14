package com.titanfight.titan_fight_app.api.controller;

import com.titanfight.titan_fight_app.api.entities.Modalidade;
import com.titanfight.titan_fight_app.api.repository.ModalidadeRepository;
import com.titanfight.titan_fight_app.api.dto.ModalidadeRequestDTO;
import com.titanfight.titan_fight_app.api.dto.ModalidadeResponseDTO;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/modalidade")
public class ModalidadeController {

    @Autowired
    private ModalidadeRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<ModalidadeResponseDTO> getAll() {

        List<ModalidadeResponseDTO> modList = repository.findAll().stream().map(ModalidadeResponseDTO::new).toList();
        return modList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveModalidade(@RequestBody ModalidadeRequestDTO data) {
        Modalidade modData = new Modalidade(data);
        repository.save(modData);
        //return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deleteModalidade(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    @Transactional
    public ModalidadeResponseDTO atualizar(@PathVariable Long id, @RequestBody ModalidadeRequestDTO data) {
        var modalidade = repository.getReferenceById(id);

        modalidade.updateModalidade(data);

        // Retorna o DTO atualizado para o Front-end
        return new ModalidadeResponseDTO(modalidade);
    }
}