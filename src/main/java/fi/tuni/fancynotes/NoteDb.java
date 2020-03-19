package fi.tuni.fancynotes;

import org.springframework.data.repository.CrudRepository;

public interface NoteDb extends CrudRepository<Note, Long> {
}
