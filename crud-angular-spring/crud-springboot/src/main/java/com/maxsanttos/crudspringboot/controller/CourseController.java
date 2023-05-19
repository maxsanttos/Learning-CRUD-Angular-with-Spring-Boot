package com.maxsanttos.crudspringboot.controller;

import org.hibernate.mapping.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @GetMapping
    //@RequestMapping(method = RequestMethod.GET)
    public List<Object> list(){
        return null;
    }
}
