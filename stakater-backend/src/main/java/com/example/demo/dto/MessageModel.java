package com.example.demo.dto;

import java.io.Serializable;

public class MessageModel implements Serializable {
    private String text;

    public MessageModel(String content) {
        this.text = content;
    }

    public MessageModel() {
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
