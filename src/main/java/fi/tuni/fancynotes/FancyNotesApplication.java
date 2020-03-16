package fi.tuni.fancynotes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@SpringBootApplication
public class FancyNotesApplication {

	public static void main(String[] args) {
		System.out.println("Maija Visala, Hanna Tuominen");
		SpringApplication.run(FancyNotesApplication.class, args);
	}

	@RestController
	public class HelloController {
		@GetMapping("/api/hello")
		public String hello() {
			return "Welcome to the website.";
		}
	}
}
