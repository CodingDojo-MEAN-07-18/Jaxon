import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Console } from '@angular/core/src/console';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Note } from '../note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  note: Note = new Note();
  constructor(private readonly _notes: NotesService) { }
  @Output()
  addNote = new EventEmitter();

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this._notes.createNote(this.note)
      .subscribe(note => {
        console.log(note);
        this.addNote.emit(note);
        this.note = new Note();
        form.reset();
      });
  }

}
