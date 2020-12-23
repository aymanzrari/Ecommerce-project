package com.luv2code.ecommerce.entity;


import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;

@Entity
@Table(name = "authorities")
@Getter
@Setter
public class Authoritie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id ;

    @Column(name = "authority")
    private String authority ;

    @ManyToOne
    @JoinColumn(name = "username")
    private Users user;

}
