package com.victor.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.victor.crudspring.model.Tabela;

@Repository
public interface TabelaRepository extends JpaRepository<Tabela, Long>{
    
}
