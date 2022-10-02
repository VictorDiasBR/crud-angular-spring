package com.victor.crudspring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.victor.crudspring.model.Tabela;
import com.victor.crudspring.repository.TabelaRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/tabela")
@AllArgsConstructor
public class HelloController {

    private final TabelaRepository tabelaRepository;

    @GetMapping
    public List<Tabela> list() {
        return tabelaRepository.findAll();

    }

    @GetMapping("/{id}")
    public ResponseEntity<Tabela> findById(@PathVariable Long id) {

        return tabelaRepository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Tabela create(@RequestBody Tabela tabela) {

        return tabelaRepository.save(tabela);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tabela> update(@RequestBody Tabela tabela) {

        return ResponseEntity.ok(tabelaRepository.save(tabela));
    }

    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable Long id) {
        try{
        tabelaRepository.deleteById(id);
        return true;
        }catch(Exception x){

        }
        return false;
    }

}
