package com.titanfight.titan_fight_app.api.controller;

import com.titanfight.titan_fight_app.api.entities.Aluno;
import com.titanfight.titan_fight_app.api.repository.AlunoRepository;
import com.titanfight.titan_fight_app.api.dto.AlunoRequestDTO;
import com.titanfight.titan_fight_app.api.dto.AlunoResponseDTO;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/aluno")
@CrossOrigin(origins = "*")
public class AlunoController {

    @Autowired
    private AlunoRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<AlunoResponseDTO> getAll(){

        List<AlunoResponseDTO> alunolist = repository.findAll().stream().map(AlunoResponseDTO::new).toList();
        return alunolist;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveAluno(@RequestBody AlunoRequestDTO data){
        Aluno alunoData = new Aluno(data);
        repository.save(alunoData);
        //return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deleteAluno(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    @Transactional
    public AlunoResponseDTO atualizar(@PathVariable Long id, @RequestBody AlunoRequestDTO data) {
        var aluno = repository.getReferenceById(id);
        aluno.updateAluno(data);
        return new AlunoResponseDTO(aluno);
    }


}
