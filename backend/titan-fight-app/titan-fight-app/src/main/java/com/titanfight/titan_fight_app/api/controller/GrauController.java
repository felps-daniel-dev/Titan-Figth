package com.titanfight.titan_fight_app.api.controller;

import com.titanfight.titan_fight_app.api.dto.GrauRequestDTO;
import com.titanfight.titan_fight_app.api.dto.GrauResponseDTO;
import com.titanfight.titan_fight_app.api.entities.Grau;
import com.titanfight.titan_fight_app.api.repository.GrauRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grau")
public class GrauController {

    @Autowired
    private GrauRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<GrauResponseDTO> getAll(){

        List<GrauResponseDTO> grauList = repository.findAll().stream().map(GrauResponseDTO::new).toList();
        return grauList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveGrau(@RequestBody GrauRequestDTO data){
         Grau grauData = new Grau(data);
        repository.save(grauData);
        //return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deleteGrau(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    @Transactional
    public GrauResponseDTO atualizar(@PathVariable Long id, @RequestBody GrauRequestDTO data) {
        var grau = repository.getReferenceById(id);

        grau.updateGrau(data);

        // Retorna o DTO atualizado para o Front
        return new GrauResponseDTO(grau);
    }

}
