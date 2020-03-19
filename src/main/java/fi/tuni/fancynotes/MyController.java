package fi.tuni.fancynotes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @Autowired
    NoteDb noteDb;

    @RequestMapping("getAll")
    public Iterable<Note> getAll(){
        return noteDb.findAll();
    }

    @RequestMapping(value = "add", method = RequestMethod.POST)
    public void add(@RequestBody Note note){
        noteDb.save(note);
//        return ;
    }

    @RequestMapping("test")
    public void testNotes(){
        noteDb.save(new Note("Moi", "Moi"));
    }
}
