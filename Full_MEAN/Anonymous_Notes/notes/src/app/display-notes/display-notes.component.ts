import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {
  notes;
  constructor(private readonly _notes: NotesService) { }
  ngOnInit() {
    this.getNotes();
  }
  getNotes() {
    this._notes.getNotes()
      .subscribe(notes => {
        this.notes = notes;
      });
  }
  createNote(event) {
    this.notes.unshift(event);
  }

}
