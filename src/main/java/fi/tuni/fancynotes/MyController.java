package fi.tuni.fancynotes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @Autowired
    NoteDb noteDb;

    @RequestMapping("getAll")
    public Iterable<Note> getAll(){
        return noteDb.findAll();
    }

    @RequestMapping("test")
    public void testNotes(){
        noteDb.save(new Note("Moi", "Moi"));
    }
}
