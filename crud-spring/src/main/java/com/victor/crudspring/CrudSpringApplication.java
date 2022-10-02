package com.victor.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.victor.crudspring.model.Tabela;
import com.victor.crudspring.repository.TabelaRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDataBase(TabelaRepository tabelaRepository) {
		return args -> {
			Tabela t = new Tabela();
			t.setNome("x");
			t.setCategoria("cat");
			tabelaRepository.deleteAll();
			tabelaRepository.save(t);
		};
	}

}
