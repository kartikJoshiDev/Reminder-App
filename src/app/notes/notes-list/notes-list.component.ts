import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/service/common-service.service';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  noteList: any;
  searchNote:string;
  noRecord:boolean;

  constructor(private commonService: CommonServiceService,private route: Router) { }

  ngOnInit(): void {
    this.noteList = [];
    this.searchNote = '';
    this.getNoteList();
  }

  getNoteList(){
    this.commonService.getNote().subscribe((data)=>{
      console.log("Data Here : ", data);
      this.noteList = data;
      if(this.noteList.length == 0)
        this.noRecord = true;
      else
        this.noRecord = false;
    });
  }

  removeNote(note){
    this.commonService.removeNote(note);
    alert('Note Removed');
  }

  filterNote(event){
    console.log("Here It Is");
    if(event.trim() != ''){
      this.noteList = this.commonService.filterNote(event);
      console.log("NoteList New :",this.commonService.filterNote(event));
    }else{
      this.getNoteList();
    }
  }

  editNote(note){
    console.log("note : ",note);
    this.route.navigate(['/note/editNote'],{queryParams:note});

  }

}
