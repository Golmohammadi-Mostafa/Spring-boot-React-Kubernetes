package com.example.demo.rest;


import com.example.demo.dto.MessageModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController


public class StakaterResource {

    @Value("${stakater.contact-name}")
    private String name;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET, value = "/")
    public ResponseEntity<String> getHello() {
        String content = "Hello " + name;
        return ResponseEntity.ok().body(content);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET, value = "/printHello")
    public ResponseEntity<MessageModel> getHello2() {
        return ResponseEntity.ok().body(new MessageModel(getHello().getBody()));
    }

}
