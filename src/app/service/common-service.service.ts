import { Injectable, ɵConsole } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Note } from '../models/note.model';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  note:BehaviorSubject<Array<Note>> = new BehaviorSubject([]);

  constructor( private _sharedService:LocalStorageService) {
    var newNote = this._sharedService.getLocalStorageData('Reminder');
      console.log(" Data from Storage : ",newNote);
    if(newNote !== 'null'){
      this.note.next(JSON.parse(newNote));
    }
   }

  addNote(value:Note){
    console.log("value : ",value);
    this.note.next([...this.note.value,...[value]]);
    console.log("Data Store : ",this.note.value);
    this._sharedService.setLocalStorageData('Reminder',JSON.stringify(this.note.value));
  }

  getNote():Observable<any>{
    return this.note.asObservable();
  }

  removeNote(value){
    var newNoteList=[...this.note.value];
    newNoteList.splice(newNoteList.indexOf(value),1);
    //console.log(" new Note :",newNoteList.splice(this.note.value.indexOf(value)));
    this.note.next(newNoteList);
    this._sharedService.setLocalStorageData('Reminder',JSON.stringify(this.note.value));
  }

  filterNote(value){
    return this.note.value.filter((data)=>{
      if(data.subject.toLowerCase().search(value.toLowerCase()) == -1)
      return false;
      else
      return true;
    });
  }
  
  getNoteIndex(noteValue){
    console.log("Note collection : ",this.note.value,'/n','Note :',noteValue);
    var newNoteList:any=[...this.note.value];
    var i = 0;
    
    for(let note of newNoteList){
      if(note.subject == noteValue.subject){
        return i;
      }
      i++;
      if(newNoteList.length == i){
        return -1;
      }
    }
  }

  updateNote(value,index){
    var newNote = [...this.note.value];
    newNote[index] = value;
    this.note.next(newNote);
    this._sharedService.setLocalStorageData('Reminder',JSON.stringify(this.note.value));
  }
}
