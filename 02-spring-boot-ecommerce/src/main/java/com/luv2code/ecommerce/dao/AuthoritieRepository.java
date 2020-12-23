package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Authoritie;
import com.luv2code.ecommerce.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "role",path = "role")
public interface AuthoritieRepository extends JpaRepository<Authoritie,Integer> {

}
