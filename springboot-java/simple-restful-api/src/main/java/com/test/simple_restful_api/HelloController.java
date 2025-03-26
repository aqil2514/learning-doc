package com.test.simple_restful_api;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// TODO :Lanjut besok.

@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, Springboot!";
    }

    @GetMapping("/hello/{name}")
    public String sayHelloWithName(@PathVariable String name) {
        return "Halo," + name + "! Selamat datang di Springboot";
    }

    @GetMapping("/user")
    public Map<String, String> getUser() {
        Map<String, String> user = new HashMap<>();
        user.put("name", "Aqil");
        user.put("email", "aqil@example.com");

        return user;
    }

    private List<Map<String, String>> users = new ArrayList<>();

    @PostMapping("/user")
    public String addUser(@RequestBody Map<String, String> newUser) {
        users.add(newUser);
        return "User berhasil ditambah";
    }

    @DeleteMapping("/user/{email}")
    public String deleteUserByEmail(@PathVariable String email) {
        for (Map<String, String> user : users) {
            if (user.get("email").equals(email)) {
                users.remove(user);
                return "User dengan email " + email + " berhasil dihapus";
            }
        }
        return "Tidak ada user dengan email " + email;
    }

    @GetMapping("/users")
    public List<Map<String, String>> getUsers() {
        return users;
    }

    @GetMapping("/user/{name}")
    public Map<String, String> getUserByName(@PathVariable String name) {
        List<Map<String, String>> users = new ArrayList<>();

        Map<String, String> user1 = new HashMap<>();
        user1.put("name", "Aqil");
        user1.put("email", "aqil@example.com");

        Map<String, String> user2 = new HashMap<>();
        user2.put("name", "Budi");
        user2.put("email", "budi@example.com");

        users.add(user1);
        users.add(user2);

        return users.stream().filter(user -> user.get("name").equalsIgnoreCase(name)).findFirst().orElse(null);
    }

    @GetMapping("/goodbye")
    public String sayGoodbye() {
        return "Goodbye, Springboot!";
    }
}
