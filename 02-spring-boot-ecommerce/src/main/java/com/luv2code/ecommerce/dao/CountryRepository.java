package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Country;
import com.luv2code.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "countries",path = "countries")
public interface CountryRepository extends JpaRepository<Country,Integer> {
}
